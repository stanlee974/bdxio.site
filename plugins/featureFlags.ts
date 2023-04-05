import { defineNuxtPlugin } from "#imports";

const sectionFlags = {
  SHOW_SECTION_VOLUNTEERS: false,
};

const linkFlags = {
  SHOW_LINK_CFP: false,
  SHOW_LINK_BILLETERIE: false,
  SHOW_LINK_OPENFEEDBACK: false,
  SHOW_LINK_YOUTUBE: false,
  SHOW_LINK_PROGRAMME_PDF: false,
};

const pageFlags = {
  SHOW_PAGE_PROGRAMME: false,
  SHOW_PAGE_SPONSORS: true,
  SHOW_PAGE_SPONSORS2022: false,
  SHOW_PAGE_ASSOCIATION: false,
  SHOW_PAGE_JOBS: false,
  SHOW_PAGE_TALKS: false,
  SHOW_PAGE_LIVE: false,
  SHOW_PAGE_FAQ: true,
};

const FLAGS = {
  ...linkFlags,
  ...pageFlags,
  ...sectionFlags,
};

export default defineNuxtPlugin(() => {
  const flags = Object.entries(FLAGS).reduce((flags, [key, value]) => {
    Object.assign(flags, { [key]: value });
    return flags;
  }, {});

  return {
    provide: flags,
  };
});
