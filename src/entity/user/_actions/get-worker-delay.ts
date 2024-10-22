"use server";

import { readJsonFile } from "@/shared/lib/fs";
import { WorkerDelay } from "../_domain/types";

export const getWorkerDelay = async ({ id }: { id: string }) => {
    const data = await readJsonFile();

    const worker = data.find((worker: WorkerDelay) => worker.uid === id);

    return worker;
};
