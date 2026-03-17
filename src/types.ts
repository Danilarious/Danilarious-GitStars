export type CategoryRuleSet = {
	keywords: string[];
	languages: string[];
};

export type CategoryDefinition = {
	id: string;
	title: string;
	description: string;
	priority: number;
	rules: CategoryRuleSet;
};

export type CategoryConfig = {
	recentCount: number;
	defaultCategory: string;
	categories: CategoryDefinition[];
};

export type RepoMatchRule = {
	fullName?: string;
	name?: string;
	url?: string;
};

export type CategoryOverrideRule = {
	match: RepoMatchRule;
	category: string;
};

export type OverridesConfig = {
	exclude: RepoMatchRule[];
	categories: CategoryOverrideRule[];
};

export type GitHubRepoOwner = {
	login: string;
	type: string;
};

export type GitHubRepo = {
	id: number;
	name: string;
	full_name: string;
	html_url: string;
	description: string | null;
	homepage: string | null;
	language: string | null;
	topics?: string[];
	archived: boolean;
	disabled: boolean;
	fork: boolean;
	created_at: string;
	updated_at: string;
	pushed_at: string | null;
	stargazers_count: number;
	owner: GitHubRepoOwner;
	license?: {
		spdx_id?: string | null;
		name?: string | null;
	} | null;
};

export type GitHubStarResponse =
	| {
			starred_at?: string;
			repo?: GitHubRepo;
	  }
	| GitHubRepo;

export type StarRecord = {
	id: number;
	fullName: string;
	name: string;
	owner: string;
	ownerType: string;
	url: string;
	description: string | null;
	homepage: string | null;
	language: string | null;
	topics: string[];
	archived: boolean;
	disabled: boolean;
	fork: boolean;
	createdAt: string;
	updatedAt: string;
	pushedAt: string | null;
	starredAt: string | null;
	stargazersCount: number;
	license: string | null;
};

export type DeterministicClassification = {
	category: string;
	confidence: number;
	reason: string;
	source: "override" | "rules" | "default";
};

export type ClassifiedStarRecord = StarRecord & {
	category: string;
	categoryTitle: string;
	classificationConfidence: number;
	classificationReason: string;
	classificationSource: "override" | "rules" | "default";
};

export type StarsSnapshot = {
	version: 1;
	username: string;
	generatedAt: string;
	items: ClassifiedStarRecord[];
};

export type StarsSnapshotChunk = {
	version: 1;
	username: string;
	generatedAt: string;
	chunkIndex: number;
	chunkCount: number;
	items: ClassifiedStarRecord[];
};

export type CatalogCategorySummary = {
	id: string;
	title: string;
	description: string;
	priority: number;
	count: number;
};

export type CatalogManifest = {
	version: 1;
	title: string;
	description: string;
	username: string;
	generatedAt: string;
	total: number;
	recentCount: number;
	chunkSize: number;
	chunkCount: number;
	categories: CatalogCategorySummary[];
};

export type DiffSummary = {
	added: number;
	removed: number;
	updated: number;
};

export type RuntimeConfig = {
	username: string;
	dryRun: boolean;
	stdout: boolean;
	forceRefresh: boolean;
	title: string;
	description: string;
	githubToken?: string;
	githubApiBaseUrl: string;
};
