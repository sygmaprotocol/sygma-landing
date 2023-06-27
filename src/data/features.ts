export interface IProductFeature {
  title: string;
  desc?: string;
  status: string;
}

export const currentFeatures: IProductFeature[] = [
  {
    title: "Fees in any token",
    status: "Live on mainnet"
  },
  {
    title: "General message passing",
    status: "Live on mainnet"
  },
  {
    title: "EVM asset support",
    status: "Live on mainnet"
  },
  {
    title: "Substrate asset support",
    status: "Live on mainnet"
  },
  {
    title: "Competitive fees",
    status: "Live on mainnet"
  },
]

export const futureFeatures: IProductFeature[] = [
  {
    title: "Native EVM-XCM swaps",
    status: "In development"
  },
  
]

export interface IDesignFeature {
  title: string;
  desc: string;
  badgeText: string;
  expandedText?: string;
}

export const designFeatures: IDesignFeature[] = [
  {
    title: "Permissionlessness",
    desc: "Can you build without being whitelisted?",
    badgeText: "Yes",
    expandedText: "Any project can use Sygma's generic message passing handler.",
  },
  {
    title: "Architecture type",
    desc: "How are transactions validated?",
    badgeText: "MPC",
    expandedText: "[add sentence from mpc article]",
  },
  {
    title: "Settlement",
    desc: "How long does it take on average?",
    badgeText: "{PENDING TIME}",
    expandedText: "The expected time it takes to transfer is dependent on the finality times of the blockchains involved. However, you can expect EVM to Substrate transfers to typically take {min} to {max} time."
  },
  {
    title: "Relayer set",
    desc: "How many relayers vote on transactions?",
    badgeText: "5",
    expandedText: "Currently there are 5 relayers that vote on cross-chain transfers. There will be 3 more added in {date}, and eventually reaching a maximum of 12."
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