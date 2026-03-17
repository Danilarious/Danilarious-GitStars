import type {
	CategoryConfig,
	OverridesConfig,
	RuntimeConfig,
} from "./types.ts";

const rootUrl = new URL("../", import.meta.url);

export const paths = {
	root: rootUrl,
	siteShell: new URL("assets/site/", rootUrl),
	publishRoot: new URL("dist/", rootUrl),
	data: new URL("dist/data/", rootUrl),
	catalog: new URL("dist/data/catalog.json", rootUrl),
	categories: new URL("config/categories.json", rootUrl),
	overrides: new URL("config/overrides.json", rootUrl),
	template: new URL("templates/README.hbs", rootUrl),
	readme: new URL("README.md", rootUrl),
};

function readFlag(name: string): boolean {
	return Bun.argv.includes(name);
}

function readOption(name: string): string | undefined {
	const index = Bun.argv.indexOf(name);
	if (index === -1) {
		return undefined;
	}

	return Bun.argv[index + 1];
}

function readBooleanEnv(name: string): boolean {
	const value = Bun.env[name]?.trim().toLowerCase();
	return value === "1" || value === "true" || value === "yes" || value === "on";
}

export async function readJsonFile<T>(file: URL): Promise<T> {
	return (await Bun.file(file).json()) as T;
}

export async function loadCategoryConfig(): Promise<CategoryConfig> {
	return readJsonFile<CategoryConfig>(paths.categories);
}

export async function loadOverridesConfig(): Promise<OverridesConfig> {
	return readJsonFile<OverridesConfig>(paths.overrides);
}

export function loadRuntimeConfig(): RuntimeConfig {
	const username =
		readOption("--username") ??
		Bun.env.GITHUB_USERNAME ??
		Bun.env.STARS_USERNAME;

	if (!username) {
		throw new Error(
			"Missing username. Set GITHUB_USERNAME or STARS_USERNAME, or pass --username <github-handle>.",
		);
	}

	return {
		username,
		dryRun: readFlag("--dry-run"),
		stdout: readFlag("--stdout"),
		forceRefresh: readFlag("--force") || readBooleanEnv("FORCE_REFRESH"),
		title: Bun.env.README_TITLE ?? "My Stars",
		description:
			Bun.env.README_DESCRIPTION ??
			"A generated catalog of starred GitHub repositories, grouped into stable categories.",
		githubToken: Bun.env.GITHUB_TOKEN ?? Bun.env.GH_TOKEN,
		githubApiBaseUrl: Bun.env.GITHUB_API_BASE_URL ?? "https://api.github.com",
	};
}
