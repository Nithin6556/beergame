/** Research study: static baseline vs rule-based adaptive player UI. */
export type PlayerUiMode = "static" | "adaptive";

export const PLAYER_UI_MODE_KEY = "beerGame_player_uiMode";

/** Backlog above this counts as high workload (adaptive UI may simplify the screen). */
export const STRESS_BACKLOG_THRESHOLD = 5;

/** Inventory above this counts as overstock / high workload. */
export const OVERSTOCK_THRESHOLD = 40;

export function getPlayerUiMode(): PlayerUiMode {
  const stored = sessionStorage.getItem(PLAYER_UI_MODE_KEY);
  return stored === "adaptive" ? "adaptive" : "static";
}

export function setPlayerUiMode(mode: PlayerUiMode): void {
  sessionStorage.setItem(PLAYER_UI_MODE_KEY, mode);
}

export function isPlayerStressed(backlog: number, inventory: number): boolean {
  return backlog > STRESS_BACKLOG_THRESHOLD || inventory > OVERSTOCK_THRESHOLD;
}

export function getAdaptiveContextTip(backlog: number, inventory: number): string | null {
  if (backlog > 0) {
    return `You have ${Math.round(backlog)} units of backlog (unmet demand). Backlog costs more than holding inventory.`;
  }
  if (inventory > OVERSTOCK_THRESHOLD) {
    return `Inventory is high (${Math.round(inventory)} units). Extra stock adds holding cost each week.`;
  }
  return null;
}
