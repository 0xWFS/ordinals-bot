import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

const categories = [
  {
    name: 'Recent',
    posts: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: 'Popular',
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: 'Trending',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
];

// const tabs = [{ name: 'ordi', max_supply: 1000, remaining_supply: 1000 }];
export interface TTabsInfo {
  name: string;
  max_supply: number;
  remaining_supply: number;
}

export interface TTabs {
  tabs: TTabsInfo[];
}

export function Tabs({ tabs }: TTabs) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full">
        <TabGroup>
          <TabList className="flex justify-center gap-4">
            {tabs.map(({ name }) => (
              <Tab
                key={name}
                className="uppercase rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-slate-400 data-[hover]:bg-slate-300 data-[selected]:data-[hover]:bg-slate-300 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {tabs.map(({ name, max_supply, remaining_supply }) => (
              <TabPanel
                key={name}
                className="rounded-xl bg-slate-200 p-3 flex flex-col justify-center gap-5"
              >
                <div className="text-xs">
                  <p className="font-medium">Available Balance</p>
                  <p className="font-light">{max_supply} Tokens</p>
                </div>
                <div className="text-xs">
                  <p className="font-medium">Transferable Balance</p>
                  <p className="font-light">{remaining_supply} Tokens</p>
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
