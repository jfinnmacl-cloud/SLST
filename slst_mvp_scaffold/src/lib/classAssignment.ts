export type ClassBlock = {
  id: string;
  name: string;
  capacity: number;
  currentEnrollment: number;
};

export const defaultBlocks: ClassBlock[] = [
  { id: "block-1", name: "Block 1", capacity: 13, currentEnrollment: 0 },
  { id: "block-2", name: "Block 2", capacity: 13, currentEnrollment: 0 },
  { id: "block-3", name: "Block 3", capacity: 13, currentEnrollment: 0 },
  { id: "block-4", name: "Block 4", capacity: 13, currentEnrollment: 0 }
];

export function assignClassBlock(blocks: ClassBlock[]) {
  const available = blocks.find(block => block.currentEnrollment < block.capacity);
  return available ?? null;
}

export function instructorCapacity(instructorCount: number) {
  return instructorCount * 52;
}
