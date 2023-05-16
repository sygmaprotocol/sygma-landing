export interface ICoreFeature {
  title: string;
  desc?: string;
  status: string;
}

export const coreFeatures: ICoreFeature[] = [
  {
    title: "Fees in any token",
    status: "Live on mainnet"
  },
  {
    title: "General message passing",
    status: "Live on mainnet"
  },
  {
    title: "ERC20 transfers",
    status: "Live on mainnet"
  },
  {
    title: "ERC721 & 721a transfers",
    status: "Live on mainnet"
  },
  {
    title: "Native EVM-XCM swaps",
    status: "In development"
  },
  {
    title: "Competitively low fees",
    status: "In development"
  },
]

export interface IDesignFeature {
  title: string;
  desc: string;
  badgeText: string;
}

export const designFeatures: IDesignFeature[] = [
  {
    title: "Permissionlessness",
    desc: "Can you build without being whitelisted?",
    badgeText: "Yes",
  },
  {
    title: "Architecture type",
    desc: "How are transactions validated?",
    badgeText: "MPC",
  },
  {
    title: "Settlement",
    desc: "How long does it take on average?",
    badgeText: "30 blocks",
  },
  {
    title: "Availability",
    desc: "What is the uptime estimation?",
    badgeText: "High",
  },
  {
    title: "Validator set",
    desc: "How many validators vote on transactions?",
    badgeText: "12",
  },
]

export const usecases = [
  {
    name: "DEXs",
    scenario: "swaps",
  },
  {
    name: "Algorithmic stablecoins",
    scenario: "liquidity management",
  },
  {
    name: "NFT Marketplaces",
    scenario: "NFT utilities",
  },
  {
    name: "Money markets",
    scenario: "debt positions",
  },
  {
    name: "Governance",
    scenario: "treasury administration",
  },
  {
    name: "New primitives",
    scenario: "experimental applications",
  },
]