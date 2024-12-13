export interface ModalItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metrics: {
    used: number;
    type: string;
    pages: number;
    lastUpdated: string;
  };
  questions: string[];
  tab?: "featured" | "kpi" | "layouts" | "storyboards";
}
