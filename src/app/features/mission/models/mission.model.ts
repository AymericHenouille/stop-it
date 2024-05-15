/**
 * Interface for the mission data
 */
export interface MissionData {
  /**
   * Unique identifier
   */
  id: string;
  /**
   * Name of the mission
   */
  name: string;
  /**
   * The start date of the mission
   */
  startAt: Date;
  /**
   * The end date of the mission
   */
  duration: number;
}

/**
 * Interface for the mission
 */
export interface Mission extends MissionData {
  /**
   * The history of the mission
   */
  historic: MissionHistory[];
}

/**
 * Interface for the mission history
 */
export interface MissionHistory {
  /**
   * The date of the history
   */
  date: Date;
  /**
   * The changes of the history
   */
  changes: MissionData;
}
