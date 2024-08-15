---
title: Executors
---

Executors are responsible for running the flows in Lawme. The executor can be chosen using the dropdown in the menu bar of the application.

There are 3 possible executors in use at any one time:

## Browser

This is the default executor. Lawme itself is a browser application running in a web view. The browser executor runs in the same process as the Lawme application, and runs the flow there. This is the simplest executor to use, but is limited by the capabilities of the browser (and a few file-system APIs).

## Node

This executor runs a separate Node.js process to execute flows, and communicates with it using the remote debugger protocol. This executor is more powerful than the browser executor, but can be more temperamental and does not support every feature of the browser executor yet.

## Remote

This executor connects to a remote Lawme server to execute flows. It requires the remote debugger to be set up on another application, and requires that `dynamicFlowRun` is implemented on the remote server, so that the flow shown in the Lawme application can be ran remotely. You may also enable `allowFlowUpload` on the remote executor to allow the flow to be uploaded to the remote server, and then ran there.

To use the remote executor, connect via the **Remote Debugger** option in the dropdown of the Lawme action bar.
