## January 5, 2021, 

## Modified Android SDK Versions

- In `android/build.gradle` upgraded `compileSdkVersion` and `targetSdkVersion` from `30` to `31`
- This upgrade was necessary for admob configurations to work correctly

## Problems Encountered 

### "expiring daemon because jvm heap space is exhausted"

- Problem: running out of memory when compiling 
- Soloution: uncomment `org.gradle.jvmargs=-Xmx2048m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8` in `android/gradle.properties`

### react-native-firebase/admob not working

- Problem: I kept getting errors saying the functions being used don't exist
- Soloution: `react-native-firebae/admob` is deprecated because admob is now a seperate entity from firebase. I am now using `@react-native-admob/admob` instead

### react-native-firebase/admob adLoaded variable not working

- Problem: the `adLoaded` variable is not getting set properly. I opened an issue on the `react-native-firebase/admob` repository
- Soloution: none yet, I'm waiting for someone to potentially fix the error on the repo. While the error exists, I'm using a different way to reload ads

## January 9, 2021

## Problems Encountered

### reading realtime firebase prizes like an array

- The firebase realtime database inteprets nodes with child nodes using numbers as an array if the number of child nodes is more than half of the greatest value.
- For example:

```
root
   prizes
      2
        ... prizeData
      3
        ... prizeData
      5
        ... prizeData
```

If the above `prizes` node is queried. It will return an array of data in form `[{1: {}, 2: {...}, 3: {...}, 4: {}, 5: {...}}]` because the realtime database interprets the data as an array with a length of `5`. Since there are 3 values (`2`, `3` and `5`), when the `prizes` node is queried, it returns a list of 5 elements with indices as the JSON keys. Obviously, key 1 and 4 are null, so the value at those keys will be null. This can be a danger to efficiency in the code. if only child node `2` and `5` existed, then the query result would be `[{2: {...}, 5: {...}}]` because the length of the list is interpreted as `5` but only `2` items exists. Since there are only 2 values (`2` and `5`) in this case, the realtime database does not interpret the data as a list (array) of values, and just sends the data that exists. Therefore, <b>we need to ensure that I don't insert prize values that will make the Available Prizes page interpret the data as a list (array)</b>. That will cause the app to take a huge hit performance wise.  
