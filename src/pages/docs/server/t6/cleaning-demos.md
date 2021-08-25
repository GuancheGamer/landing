# How to automatically clean up demo files

1. Change the path and replace the `<number of days>` with the number of days to keep the demo files.

`forfiles /p "C:\what\ever\storage\t6\demos" /m *.demo /D -<number of days> /C "cmd /c del @path"`

So it might become:

`forfiles /p "%localappdata%\Plutonium\storage\t6\demos" /m *.demo /D -7 /C "cmd /c del @path"`

Or in case you did change the patch where Plutonium is installed to it might become:

`forfiles /p "C:\gameserver\plutot6\Plutonium\storage\t6\demos" /m *.demo /D -7 /C "cmd /c del @path"`

2. Add it as a Task in the Task Shedular like on the screenshots and let it run daily.

![img](/images/server/t6/cleaning-demos/hVHbxdp.png)

On the Triggers tab add a new trigger:

![img](/images/server/t6/cleaning-demos/EEq4rpp.png)

On the Actions tab add a new action:

Everything after forfiles from step 1 is a argument, so paste them all in.

![img](/images/server/t6/cleaning-demos/aeE3kA8.png)

 Add a second action with the same arguments as above but change `*.demo` to `*.data`

 `forfiles /p "%localappdata%\Plutonium\storage\t6\demos" /m *.demo /D -7 /C "cmd /c del @path"` would change to `forfiles /p "%localappdata%\Plutonium\storage\t6\demos" /m *.data /D -7 /C "cmd /c del @path"`

 This is needed to clean up the meta data files containing plain text information about the match as well.

3. Enter your password for the task to be able to run even when no-one is logged in.