"use server";

import { readJsonFile, writeJsonFile } from "@/shared/lib/fs";
import { WorkerDelay } from "../_domain/types";

export const updateWorkerDelay = async ({
    uid,
    time,
}: {
    uid: string | undefined;
    time: string;
}) => {
    const data = await readJsonFile();
    const workerIndex = data.findIndex(
        (worker: WorkerDelay) => worker.uid === uid
    );

    if (workerIndex !== -1) {
        // Update delay time
        data[workerIndex].delay = time;
    } else if (uid) {
        // Add new worker
        data.push({ uid, delay: time });
    }

    writeJsonFile(data);
};
