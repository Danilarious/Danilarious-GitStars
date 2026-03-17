import Handlebars from "handlebars";
import type {
	CategoryConfig,
	ClassifiedStarRecord,
	DiffSummary,
} from "./types.ts";

type RenderContext = {
	title: string;
	description: string;
	username: string;
	generatedAt: string;
	summary: {
		total: number;
		categoryCount: number;
	};
	changes: DiffSummary;
	recent: Array<ClassifiedStarRecord & { topicDisplay: string | null }>;
};

function withTopicDisplay(
	item: ClassifiedStarRecord,
): ClassifiedStarRecord & { topicDisplay: string | null } {
	return {
		...item,
		topicDisplay:
			item.topics.length > 0 ? item.topics.slice(0, 3).join(", ") : null,
	};
}

export async function renderReadme(
	templateFile: URL,
	options: {
		title: string;
		description: string;
		username: string;
		generatedAt: string;
		categoryConfig: CategoryConfig;
		records: ClassifiedStarRecord[];
		changes: DiffSummary;
	},
): Promise<string> {
	const templateSource = await Bun.file(templateFile).text();
	const template = Handlebars.compile(templateSource, { noEscape: true });

	const categories = options.categoryConfig.categories
		.map((category) => {
			const items = options.records
				.filter((record) => record.category === category.id)
				.sort((left, right) => left.fullName.localeCompare(right.fullName))
				.map(withTopicDisplay);

			return {
				id: category.id,
				title: category.title,
				description: category.description,
				count: items.length,
				items,
			};
		})
		.filter((category) => category.count > 0);

	const recent = [...options.records]
		.sort((left, right) =>
			(right.starredAt ?? "").localeCompare(left.starredAt ?? ""),
		)
		.slice(0, options.categoryConfig.recentCount)
		.map(withTopicDisplay);

	const context: RenderContext = {
		title: options.title,
		description: options.description,
		username: options.username,
		generatedAt: options.generatedAt,
		summary: {
			total: options.records.length,
			categoryCount: categories.length,
		},
		changes: options.changes,
		recent,
	};

	return `${template(context).trim()}\n`;
}
