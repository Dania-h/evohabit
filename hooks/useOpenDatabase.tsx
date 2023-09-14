import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

export async function useOpenDatabase(username: string): Promise<SQLite.SQLiteDatabase> {
    //if SQLite folder doesn't exist
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
        //make folder
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    }

    // //if database doesn't exist
    // if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + `SQLite/${username}.db`)).exists) {
    //     //make database
    // }

    //Downloads remote database
    // await FileSystem.downloadAsync(
    //     Asset.fromModule(require(databaseFilePath)).uri,
    //     FileSystem.documentDirectory + `SQLite/${username}.db`
    // );
    return SQLite.openDatabase(`${username}.db`);
}