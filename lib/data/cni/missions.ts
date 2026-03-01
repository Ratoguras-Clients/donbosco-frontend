import type {
  HomeArrayMission,
  Mission,
  MissionApiResponse,
} from "@/lib/types";
import api from "@/lib/axios";

// Static fallback data
export const missionsFallback: Mission[] = [
  {
    id: 1,
    icon: "target",
    title: "ADVOCACY",
    description:
      "Championing policies that create a favorable business environment and drive industrial competitiveness across the province.",
  },
  {
    id: 2,
    icon: "users",
    title: "COLLABORATION",
    description:
      "Fostering partnerships between industries, government, and academia to accelerate innovation and sustainable growth.",
  },
  {
    id: 3,
    icon: "trending-up",
    title: "INNOVATION",
    description:
      "Promoting technology adoption and research-driven solutions to enhance productivity and global competitiveness.",
  },
];

export const missions = missionsFallback;
