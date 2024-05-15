/**
 * Interface for the user model
 */
export interface AppUser {
  /**
   * The user id.
   */
  id: string;
  /**
   * The display name.
   */
  name: string;
  /**
   * The picture url.
   */
  picture: string | null;
}
