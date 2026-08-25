/**
 * Site-level constants.
 *
 * CONFIRM BEFORE SHARING THE LINK: `email` is taken from this machine's git
 * config and `github` from the account that owns this repo. LinkedIn is
 * deliberately absent rather than guessed, because a dead link is worse
 * than no link (spec Appendix A).
 */
export const site = {
  name: "Aatir Siddiqui",
  role: "Cloud security analyst",
  email: "aatirsiddiqui1@gmail.com",
  github: "https://github.com/aatirs7",
  linkedin: undefined as string | undefined,
};

/** Stamped at build time, shown in the footer. */
export const buildDate = new Date().toISOString().slice(0, 10);
