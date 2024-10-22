"use server";

import { readJsonFile, writeJsonFile } from "@/shared/lib/fs";
import { WorkerDelay } from "../_domain/types";

export const deleteWorkerDelay = async ({ id }: { id: string }) => {
    const data = await readJsonFile();
    const updatedData = data.filter((worker: WorkerDelay) => worker.uid !== id);
    writeJsonFile(updatedData);
};
