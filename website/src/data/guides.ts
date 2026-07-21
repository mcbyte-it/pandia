export interface Guide {
  slug: string;
  cardTitle: string;
  title: string;
  description: string;
  blurb: string;
  datePublished: string;
}

export const guides: Guide[] = [
  {
    slug: 'open-large-json-file',
    cardTitle: 'How to open a large JSON file',
    title: 'How to Open a Large JSON File (Windows, Mac & Linux)',
    description:
      "Large JSON file won't open? Here's how to open and view multi-gigabyte JSON on Windows, Mac and Linux without your editor freezing, crashing or hitting a size limit — free and offline.",
    blurb:
      'Your editor freezes, the browser tab crashes, the online tool says "file too large". Here is why big JSON breaks ordinary tools — and how to open hundreds of MB or multiple GB instantly.',
    datePublished: '2026-07-20',
  },
  {
    slug: 'vscode-large-json',
    cardTitle: 'Fix VS Code freezing on large JSON',
    title: 'Why VS Code Freezes on Large JSON Files (and How to Fix It)',
    description:
      "VS Code hangs, lags or crashes on a big JSON file? Here's why it happens and how to open multi-gigabyte JSON instantly with a native viewer — free, offline, no upload.",
    blurb:
      'VS Code loads and tokenizes the whole file, then formats and folds it — three passes that stall on a large document. Here is what is happening and the native fix.',
    datePublished: '2026-07-20',
  },
  {
    slug: 'notepad-plus-plus-large-json',
    cardTitle: "Notepad++ can't open large JSON?",
    title: "Notepad++ Won't Open a Large JSON File? Do This Instead",
    description:
      'Notepad++ struggling with a large JSON file? Learn why it stalls on big files and how to open, read and search multi-gigabyte JSON instantly on Windows — free and offline.',
    blurb:
      'Notepad++ can open a big file, but plugins like JSON Viewer choke on it, and there is no tree to navigate. Here is a native alternative built for the size.',
    datePublished: '2026-07-20',
  },
];

export const guidesBySlug = Object.fromEntries(guides.map((g) => [g.slug, g]));
