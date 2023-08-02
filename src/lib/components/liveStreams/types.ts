export type StreamStatus = "completed" | "in progress" | "up comming";

export interface AdminLiveStream {
  id?: number;
  url?: string;
  name?: string;
  dateAdded?: string;
  status?: StreamStatus;
}
