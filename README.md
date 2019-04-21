# Developer-First Hapi.js Boilerplate

This project provides boilerplate code for a Hapi.js application along with the **ideal** way to dependency inject and unit test external systems like an SQL database or cloud services.

First of all, let me emphasize developer-first. Claim: the root of all IT problems is poorly engineered/designed/written code. If developers have a crappy experience, a crappy experience will propagate down to your end users. Therefore, great care should be taken to provide a great environment to your developers. Some things that I consider wasteful and detrimental to the developer experience:

* Long compile or build times
* Long unit test run times
* Inconsistent code style
* Inconsistent file structures
* Any hardware or software running in dev that is radically different than prod
* Any dev environment not on my laptop/desktop
* Fresh git clone to runtime that takes longer than 5 minutes
* Too many external dependencies to configure
* External configuration requirements defined in multiple places in source code
* A lacking README.md file
* No easy way to run interactive debuggers
* No easy way to profile or analyze runtime performance
* Any instance of "Well it works on my machine"
* Any project that requires a particular operating system
* Any project that requires a particular IDE
* Any project that requires particular hardware or CPU architecture (within reason)
* Code that has mutated to meet the very specific requirements of a particular production system

Stating the point of the above list in another way, I think the ideal experience would be this:
1. A developer brand new to the team or project clones the git repository.
2. They run one command and it instantly brings up an environment nearly identical to production systems
3. Said environment auto-reloads on code changes, provides an excellent linter and unit tests out of the box.
4. It works immediately with the most popular IDEs and tools like vim are still completely viable.
5. The same experience works on Windows, Linux, and MacOS whether you're on a powerful desktop or raspberry pi


The files in this project have been chosen carefully in an attempt to achieve the above goals. I will provide an explanation for the existence of each one of them starting with this one. Note that much of the backing philosophy behind this are the https://12factor.net/ principles.

The README.md file is an absolute requirement of all software projects. It should attempt to justify why the software project exists and how it attempts to make the world a better place. It should also provide all of the information needed to get the software to run on a developer's machine (if it says anything about production at all, it should be very brief). Software should not be responsible for it's own environmental configuration. The README.md should comprehensive yet brief. If there is too much text, developers are apt not to read all of it.