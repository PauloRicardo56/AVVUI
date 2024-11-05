export { default as AVVButton } from "./src/AVVButton";
export { default as AVVGameTableCell } from "./src/AVVGameTableCell";
export { default as AVVScore } from "./src/AVVScore";
export { SingleScore } from "./src/AVVScore";
export { default as AVVTable } from "./src/AVVTable";
export { default as AVVTableCell } from "./src/AVVTableCell";
export { default as AVVText } from "./src/AVVText";
export { default as AVVTextField } from "./src/AVVTextField";
export { default as AVVTitleTableCell } from "./src/AVVTitleTableCell";
export { default as AVVMatchTimer } from "./src/AVVMatchTimer";
export { default as brDate } from "./utils/Time";
export { default as AVVPrefetchView } from "./src/AVVPrefetchView"

export { getFirestoreDoc, eventListener, deleteFirebaseDoc, pushFirebaseDoc, insertIndexZeroFirebaseArray, initializeFirebase } from "./src/AVVFirebase"

export const test = () => {
    return (
        console.log(9999999)
    )
}