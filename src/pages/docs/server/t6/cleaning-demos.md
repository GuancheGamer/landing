# How to automatically clean up demo files

1. Change the path and replace the `<number of days>` with the number of days to keep the demo files.

`forfiles /p "C:\what\ever\t6r\data\demos" /m *.demo /D -<number of days> /C "cmd /c del @path"`

So it might become:

`forfiles /p "C:\gameserver\plutot6\t6r\data\demos" /m *.demo /D -7 /C "cmd /c del @path"`

2. Add it as a Task in the Task Shedular like on the screenshots and let it run daily.

![img](https://i.imgur.com/hVHbxdp.png)

On the Triggers tab add a new trigger:

![img](https://i.imgur.com/EEq4rpp.png)

On the Actions tab add a new action:

Everything after forfiles from step 1 is a argument, so paste them all in.

![img](https://i.imgur.com/aeE3kA8.png)

3. Enter your password for the task to be able to run even when no-one is logged in.