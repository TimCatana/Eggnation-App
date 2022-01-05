## January 5 2021, 

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