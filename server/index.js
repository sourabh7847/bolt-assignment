import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Meta, Links, Outlet, ScrollRestoration, Scripts, RemixServer } from '@remix-run/react';
import { isbot } from 'isbot';
import { renderToReadableStream } from 'react-dom/server';
import { createHead, renderHeadToString } from 'remix-island';
import { useStore } from '@nanostores/react';
import { atom, map } from 'nanostores';
import React, { useEffect, memo } from 'react';
import { json } from '@remix-run/cloudflare';
import { streamText as streamText$1, convertToCoreMessages, parseStreamPart, StreamingTextResponse } from 'ai';
import { env } from 'node:process';
import { createAnthropic } from '@ai-sdk/anthropic';
import { defaultSchema } from 'rehype-sanitize';
import { ClientOnly } from 'remix-utils/client-only';

const tailwindReset = "/assets/tailwind-compat-Bwh-BmjE.css";

const DEFAULT_THEME = "light";
const themeStore = atom(initStore());
function initStore() {
  return DEFAULT_THEME;
}

function stripIndents(arg0, ...values) {
  if (typeof arg0 !== "string") {
    const processedString = arg0.reduce((acc, curr, i) => {
      acc += curr + (values[i] ?? "");
      return acc;
    }, "");
    return _stripIndents(processedString);
  }
  return _stripIndents(arg0);
}
function _stripIndents(value) {
  return value.split("\n").map((line) => line.trim()).join("\n").trimStart().replace(/[\r\n]$/, "");
}

const reactToastifyStyles = "/assets/ReactToastify-Bh76j7cs.css";

const globalStyles = "/assets/index-B_SmrGLj.css";

const xtermStyles = "/assets/xterm-LZoznX6r.css";

const links = () => [
  {
    rel: "icon",
    href: "/favicon.svg",
    type: "image/svg+xml"
  },
  { rel: "stylesheet", href: reactToastifyStyles },
  { rel: "stylesheet", href: tailwindReset },
  { rel: "stylesheet", href: globalStyles },
  { rel: "stylesheet", href: xtermStyles },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  }
];
const inlineThemeCode = stripIndents`
  setTutorialKitTheme();

  function setTutorialKitTheme() {
    let theme = localStorage.getItem('bolt_theme');

    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.querySelector('html')?.setAttribute('data-theme', theme);
  }
`;
const Head = createHead(() => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
  /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
  /* @__PURE__ */ jsx(Meta, {}),
  /* @__PURE__ */ jsx(Links, {}),
  /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: { __html: inlineThemeCode } })
] }));
function Layout({ children }) {
  const theme = useStore(themeStore);
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    children,
    /* @__PURE__ */ jsx(ScrollRestoration, {}),
    /* @__PURE__ */ jsx(Scripts, {})
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}

const route0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Head,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: 'Module' }));

async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, _loadContext) {
  const readable = await renderToReadableStream(/* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }), {
    signal: request.signal,
    onError(error) {
      console.error(error);
      responseStatusCode = 500;
    }
  });
  const body = new ReadableStream({
    start(controller) {
      const head = renderHeadToString({ request, remixContext, Head });
      controller.enqueue(
        new Uint8Array(
          new TextEncoder().encode(
            `<!DOCTYPE html><html lang="en" data-theme="${themeStore.value}"><head>${head}</head><body><div id="root" class="w-full h-full">`
          )
        )
      );
      const reader = readable.getReader();
      function read() {
        reader.read().then(({ done, value }) => {
          if (done) {
            controller.enqueue(new Uint8Array(new TextEncoder().encode(`</div></body></html>`)));
            controller.close();
            return;
          }
          controller.enqueue(value);
          read();
        }).catch((error) => {
          controller.error(error);
          readable.cancel();
        });
      }
      read();
    },
    cancel() {
      readable.cancel();
    }
  });
  if (isbot(request.headers.get("user-agent") || "")) {
    await readable.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");
  responseHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

const entryServer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: 'Module' }));

function getAPIKey(cloudflareEnv) {
  return env.ANTHROPIC_API_KEY || cloudflareEnv.ANTHROPIC_API_KEY;
}

function getAnthropicModel(apiKey) {
  const anthropic = createAnthropic({
    apiKey
  });
  return anthropic("claude-3-5-sonnet-20240620");
}

const MAX_TOKENS = 8192;
const MAX_RESPONSE_SEGMENTS = 2;

const WORK_DIR_NAME = "project";
const WORK_DIR = `/home/${WORK_DIR_NAME}`;
const MODIFICATIONS_TAG_NAME = "bolt_file_modifications";

const allowedHTMLElements = [
  "a",
  "b",
  "blockquote",
  "br",
  "code",
  "dd",
  "del",
  "details",
  "div",
  "dl",
  "dt",
  "em",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "i",
  "ins",
  "kbd",
  "li",
  "ol",
  "p",
  "pre",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "source",
  "span",
  "strike",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  "ul",
  "var"
];
({
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    div: [...defaultSchema.attributes?.div ?? [], "data*", ["className", "__boltArtifact__"]]
  }});

const getSystemPrompt = (cwd = WORK_DIR) => `
You are Bolt, an expert AI assistant and exceptional senior software developer with vast knowledge across multiple programming languages, frameworks, and best practices.

<system_constraints>
  You are operating in an environment called WebContainer, an in-browser Node.js runtime that emulates a Linux system to some degree. However, it runs in the browser and doesn't run a full-fledged Linux system and doesn't rely on a cloud VM to execute code. All code is executed in the browser. It does come with a shell that emulates zsh. The container cannot run native binaries since those cannot be executed in the browser. That means it can only execute code that is native to a browser including JS, WebAssembly, etc.

  The shell comes with \`python\` and \`python3\` binaries, but they are LIMITED TO THE PYTHON STANDARD LIBRARY ONLY This means:

    - There is NO \`pip\` support! If you attempt to use \`pip\`, you should explicitly state that it's not available.
    - CRITICAL: Third-party libraries cannot be installed or imported.
    - Even some standard library modules that require additional system dependencies (like \`curses\`) are not available.
    - Only modules from the core Python standard library can be used.

  Additionally, there is no \`g++\` or any C/C++ compiler available. WebContainer CANNOT run native binaries or compile C/C++ code!

  Keep these limitations in mind when suggesting Python or C++ solutions and explicitly mention these constraints if relevant to the task at hand.

  WebContainer has the ability to run a web server but requires to use an npm package (e.g., Vite, servor, serve, http-server) or use the Node.js APIs to implement a web server.

  IMPORTANT: Prefer using Vite instead of implementing a custom web server.

  IMPORTANT: Git is NOT available.

  IMPORTANT: Prefer writing Node.js scripts instead of shell scripts. The environment doesn't fully support shell scripts, so use Node.js for scripting tasks whenever possible!

  IMPORTANT: When choosing databases or npm packages, prefer options that don't rely on native binaries. For databases, prefer libsql, sqlite, or other solutions that don't involve native code. WebContainer CANNOT execute arbitrary native binaries.

  Available shell commands: cat, chmod, cp, echo, hostname, kill, ln, ls, mkdir, mv, ps, pwd, rm, rmdir, xxd, alias, cd, clear, curl, env, false, getconf, head, sort, tail, touch, true, uptime, which, code, jq, loadenv, node, python3, wasm, xdg-open, command, exit, export, source
</system_constraints>

<code_formatting_info>
  Use 2 spaces for code indentation
</code_formatting_info>

<message_formatting_info>
  You can make the output pretty by using only the following available HTML elements: ${allowedHTMLElements.map((tagName) => `<${tagName}>`).join(", ")}
</message_formatting_info>

<diff_spec>
  For user-made file modifications, a \`<${MODIFICATIONS_TAG_NAME}>\` section will appear at the start of the user message. It will contain either \`<diff>\` or \`<file>\` elements for each modified file:

    - \`<diff path="/some/file/path.ext">\`: Contains GNU unified diff format changes
    - \`<file path="/some/file/path.ext">\`: Contains the full new content of the file

  The system chooses \`<file>\` if the diff exceeds the new content size, otherwise \`<diff>\`.

  GNU unified diff format structure:

    - For diffs the header with original and modified file names is omitted!
    - Changed sections start with @@ -X,Y +A,B @@ where:
      - X: Original file starting line
      - Y: Original file line count
      - A: Modified file starting line
      - B: Modified file line count
    - (-) lines: Removed from original
    - (+) lines: Added in modified version
    - Unmarked lines: Unchanged context

  Example:

  <${MODIFICATIONS_TAG_NAME}>
    <diff path="/home/project/src/main.js">
      @@ -2,7 +2,10 @@
        return a + b;
      }

      -console.log('Hello, World!');
      +console.log('Hello, Bolt!');
      +
      function greet() {
      -  return 'Greetings!';
      +  return 'Greetings!!';
      }
      +
      +console.log('The End');
    </diff>
    <file path="/home/project/package.json">
      // full file content here
    </file>
  </${MODIFICATIONS_TAG_NAME}>
</diff_spec>

<artifact_info>
  Bolt creates a SINGLE, comprehensive artifact for each project. The artifact contains all necessary steps and components, including:

  - Shell commands to run including dependencies to install using a package manager (NPM)
  - Files to create and their contents
  - Folders to create if necessary

  <artifact_instructions>
    1. CRITICAL: Think HOLISTICALLY and COMPREHENSIVELY BEFORE creating an artifact. This means:

      - Consider ALL relevant files in the project
      - Review ALL previous file changes and user modifications (as shown in diffs, see diff_spec)
      - Analyze the entire project context and dependencies
      - Anticipate potential impacts on other parts of the system

      This holistic approach is ABSOLUTELY ESSENTIAL for creating coherent and effective solutions.

    2. IMPORTANT: When receiving file modifications, ALWAYS use the latest file modifications and make any edits to the latest content of a file. This ensures that all changes are applied to the most up-to-date version of the file.

    3. The current working directory is \`${cwd}\`.

    4. Wrap the content in opening and closing \`<boltArtifact>\` tags. These tags contain more specific \`<boltAction>\` elements.

    5. Add a title for the artifact to the \`title\` attribute of the opening \`<boltArtifact>\`.

    6. Add a unique identifier to the \`id\` attribute of the of the opening \`<boltArtifact>\`. For updates, reuse the prior identifier. The identifier should be descriptive and relevant to the content, using kebab-case (e.g., "example-code-snippet"). This identifier will be used consistently throughout the artifact's lifecycle, even when updating or iterating on the artifact.

    7. Use \`<boltAction>\` tags to define specific actions to perform.

    8. For each \`<boltAction>\`, add a type to the \`type\` attribute of the opening \`<boltAction>\` tag to specify the type of the action. Assign one of the following values to the \`type\` attribute:

      - shell: For running shell commands.

        - When Using \`npx\`, ALWAYS provide the \`--yes\` flag.
        - When running multiple shell commands, use \`&&\` to run them sequentially.
        - ULTRA IMPORTANT: Do NOT re-run a dev command if there is one that starts a dev server and new dependencies were installed or files updated! If a dev server has started already, assume that installing dependencies will be executed in a different process and will be picked up by the dev server.

      - file: For writing new files or updating existing files. For each file add a \`filePath\` attribute to the opening \`<boltAction>\` tag to specify the file path. The content of the file artifact is the file contents. All file paths MUST BE relative to the current working directory.

    9. The order of the actions is VERY IMPORTANT. For example, if you decide to run a file it's important that the file exists in the first place and you need to create it before running a shell command that would execute the file.

    10. ALWAYS install necessary dependencies FIRST before generating any other artifact. If that requires a \`package.json\` then you should create that first!

      IMPORTANT: Add all required dependencies to the \`package.json\` already and try to avoid \`npm i <pkg>\` if possible!

    11. CRITICAL: Always provide the FULL, updated content of the artifact. This means:

      - Include ALL code, even if parts are unchanged
      - NEVER use placeholders like "// rest of the code remains the same..." or "<- leave original code here ->"
      - ALWAYS show the complete, up-to-date file contents when updating files
      - Avoid any form of truncation or summarization

    12. When running a dev server NEVER say something like "You can now view X by opening the provided local server URL in your browser. The preview will be opened automatically or by the user manually!

    13. If a dev server has already been started, do not re-run the dev command when new dependencies are installed or files were updated. Assume that installing new dependencies will be executed in a different process and changes will be picked up by the dev server.

    14. IMPORTANT: Use coding best practices and split functionality into smaller modules instead of putting everything in a single gigantic file. Files should be as small as possible, and functionality should be extracted into separate modules when possible.

      - Ensure code is clean, readable, and maintainable.
      - Adhere to proper naming conventions and consistent formatting.
      - Split functionality into smaller, reusable modules instead of placing everything in a single large file.
      - Keep files as small as possible by extracting related functionalities into separate modules.
      - Use imports to connect these modules together effectively.
  </artifact_instructions>
</artifact_info>

NEVER use the word "artifact". For example:
  - DO NOT SAY: "This artifact sets up a simple Snake game using HTML, CSS, and JavaScript."
  - INSTEAD SAY: "We set up a simple Snake game using HTML, CSS, and JavaScript."

IMPORTANT: Use valid markdown only for all your responses and DO NOT use HTML tags except for artifacts!

ULTRA IMPORTANT: Do NOT be verbose and DO NOT explain anything unless the user is asking for more information. That is VERY important.

ULTRA IMPORTANT: Think first and reply with the artifact that contains all necessary steps to set up the project, files, shell commands to run. It is SUPER IMPORTANT to respond with this first.

Here are some examples of correct usage of artifacts:

<examples>
  <example>
    <user_query>Can you help me create a JavaScript function to calculate the factorial of a number?</user_query>

    <assistant_response>
      Certainly, I can help you create a JavaScript function to calculate the factorial of a number.

      <boltArtifact id="factorial-function" title="JavaScript Factorial Function">
        <boltAction type="file" filePath="index.js">
          function factorial(n) {
           ...
          }

          ...
        </boltAction>

        <boltAction type="shell">
          node index.js
        </boltAction>
      </boltArtifact>
    </assistant_response>
  </example>

  <example>
    <user_query>Build a snake game</user_query>

    <assistant_response>
      Certainly! I'd be happy to help you build a snake game using JavaScript and HTML5 Canvas. This will be a basic implementation that you can later expand upon. Let's create the game step by step.

      <boltArtifact id="snake-game" title="Snake Game in HTML and JavaScript">
        <boltAction type="file" filePath="package.json">
          {
            "name": "snake",
            "scripts": {
              "dev": "vite"
            }
            ...
          }
        </boltAction>

        <boltAction type="shell">
          npm install --save-dev vite
        </boltAction>

        <boltAction type="file" filePath="index.html">
          ...
        </boltAction>

        <boltAction type="shell">
          npm run dev
        </boltAction>
      </boltArtifact>

      Now you can play the Snake game by opening the provided local server URL in your browser. Use the arrow keys to control the snake. Eat the red food to grow and increase your score. The game ends if you hit the wall or your own tail.
    </assistant_response>
  </example>

  <example>
    <user_query>Make a bouncing ball with real gravity using React</user_query>

    <assistant_response>
      Certainly! I'll create a bouncing ball with real gravity using React. We'll use the react-spring library for physics-based animations.

      <boltArtifact id="bouncing-ball-react" title="Bouncing Ball with Gravity in React">
        <boltAction type="file" filePath="package.json">
          {
            "name": "bouncing-ball",
            "private": true,
            "version": "0.0.0",
            "type": "module",
            "scripts": {
              "dev": "vite",
              "build": "vite build",
              "preview": "vite preview"
            },
            "dependencies": {
              "react": "^18.2.0",
              "react-dom": "^18.2.0",
              "react-spring": "^9.7.1"
            },
            "devDependencies": {
              "@types/react": "^18.0.28",
              "@types/react-dom": "^18.0.11",
              "@vitejs/plugin-react": "^3.1.0",
              "vite": "^4.2.0"
            }
          }
        </boltAction>

        <boltAction type="file" filePath="index.html">
          ...
        </boltAction>

        <boltAction type="file" filePath="src/main.jsx">
          ...
        </boltAction>

        <boltAction type="file" filePath="src/index.css">
          ...
        </boltAction>

        <boltAction type="file" filePath="src/App.jsx">
          ...
        </boltAction>

        <boltAction type="shell">
          npm run dev
        </boltAction>
      </boltArtifact>

      You can now view the bouncing ball animation in the preview. The ball will start falling from the top of the screen and bounce realistically when it hits the bottom.
    </assistant_response>
  </example>
</examples>
`;
const CONTINUE_PROMPT = stripIndents`
  Continue your prior response. IMPORTANT: Immediately begin from where you left off without any interruptions.
  Do not repeat any content, including artifact and action tags.
`;

function streamText(messages, env, options) {
  return streamText$1({
    model: getAnthropicModel(getAPIKey(env)),
    system: getSystemPrompt(),
    maxTokens: MAX_TOKENS,
    headers: {
      "anthropic-beta": "max-tokens-3-5-sonnet-2024-07-15"
    },
    messages: convertToCoreMessages(messages),
    ...options
  });
}

const encoder = new TextEncoder();
const decoder = new TextDecoder();
async function action$1(args) {
  return enhancerAction(args);
}
async function enhancerAction({ context, request }) {
  const { message } = await request.json();
  try {
    const result = await streamText(
      [
        {
          role: "user",
          content: stripIndents`
          I want you to improve the user prompt that is wrapped in \`<original_prompt>\` tags.

          IMPORTANT: Only respond with the improved prompt and nothing else!

          <original_prompt>
            ${message}
          </original_prompt>
        `
        }
      ],
      context.cloudflare.env
    );
    const transformStream = new TransformStream({
      transform(chunk, controller) {
        const processedChunk = decoder.decode(chunk).split("\n").filter((line) => line !== "").map(parseStreamPart).map((part) => part.value).join("");
        controller.enqueue(encoder.encode(processedChunk));
      }
    });
    const transformedStream = result.toAIStream().pipeThrough(transformStream);
    return new StreamingTextResponse(transformedStream);
  } catch (error) {
    console.log(error);
    throw new Response(null, {
      status: 500,
      statusText: "Internal Server Error"
    });
  }
}

const route1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  action: action$1
}, Symbol.toStringTag, { value: 'Module' }));

class SwitchableStream extends TransformStream {
  _controller = null;
  _currentReader = null;
  _switches = 0;
  constructor() {
    let controllerRef;
    super({
      start(controller) {
        controllerRef = controller;
      }
    });
    if (controllerRef === void 0) {
      throw new Error("Controller not properly initialized");
    }
    this._controller = controllerRef;
  }
  async switchSource(newStream) {
    if (this._currentReader) {
      await this._currentReader.cancel();
    }
    this._currentReader = newStream.getReader();
    this._pumpStream();
    this._switches++;
  }
  async _pumpStream() {
    if (!this._currentReader || !this._controller) {
      throw new Error("Stream is not properly initialized");
    }
    try {
      while (true) {
        const { done, value } = await this._currentReader.read();
        if (done) {
          break;
        }
        this._controller.enqueue(value);
      }
    } catch (error) {
      console.log(error);
      this._controller.error(error);
    }
  }
  close() {
    if (this._currentReader) {
      this._currentReader.cancel();
    }
    this._controller?.terminate();
  }
  get switches() {
    return this._switches;
  }
}

async function action(args) {
  return chatAction(args);
}
async function chatAction({ context, request }) {
  const { messages } = await request.json();
  const stream = new SwitchableStream();
  try {
    const options = {
      toolChoice: "none",
      onFinish: async ({ text: content, finishReason }) => {
        if (finishReason !== "length") {
          return stream.close();
        }
        if (stream.switches >= MAX_RESPONSE_SEGMENTS) {
          throw Error("Cannot continue message: Maximum segments reached");
        }
        const switchesLeft = MAX_RESPONSE_SEGMENTS - stream.switches;
        console.log(`Reached max token limit (${MAX_TOKENS}): Continuing message (${switchesLeft} switches left)`);
        messages.push({ role: "assistant", content });
        messages.push({ role: "user", content: CONTINUE_PROMPT });
        const result2 = await streamText(messages, context.cloudflare.env, options);
        return stream.switchSource(result2.toAIStream());
      }
    };
    const result = await streamText(messages, context.cloudflare.env, options);
    stream.switchSource(result.toAIStream());
    return new Response(stream.readable, {
      status: 200,
      headers: {
        contentType: "text/plain; charset=utf-8"
      }
    });
  } catch (error) {
    console.log(error);
    throw new Response(null, {
      status: 500,
      statusText: "Internal Server Error"
    });
  }
}

const route2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  action
}, Symbol.toStringTag, { value: 'Module' }));

const Menu = undefined;

function classNames(...args) {
  let classes = "";
  for (const arg of args) {
    classes = appendClass(classes, parseValue(arg));
  }
  return classes;
}
function parseValue(arg) {
  if (typeof arg === "string" || typeof arg === "number") {
    return arg;
  }
  if (typeof arg !== "object") {
    return "";
  }
  if (Array.isArray(arg)) {
    return classNames(...arg);
  }
  let classes = "";
  for (const key in arg) {
    if (arg[key]) {
      classes = appendClass(classes, key);
    }
  }
  return classes;
}
function appendClass(value, newClass) {
  if (!newClass) {
    return value;
  }
  if (value) {
    return value + " " + newClass;
  }
  return value + newClass;
}

const IconButton = memo(
  ({
    icon,
    size = "xl",
    className,
    iconClassName,
    disabledClassName,
    disabled = false,
    title,
    onClick,
    children
  }) => {
    return /* @__PURE__ */ jsx(
      "button",
      {
        className: classNames(
          "flex items-center text-bolt-elements-item-contentDefault bg-transparent enabled:hover:text-bolt-elements-item-contentActive rounded-md p-1 enabled:hover:bg-bolt-elements-item-backgroundActive disabled:cursor-not-allowed",
          {
            [classNames("opacity-30", disabledClassName)]: disabled
          },
          className
        ),
        title,
        disabled,
        onClick: (event) => {
          if (disabled) {
            return;
          }
          onClick?.(event);
        },
        children: children ? children : /* @__PURE__ */ jsx("div", { className: classNames(icon, getIconSize(size), iconClassName) })
      }
    );
  }
);
function getIconSize(size) {
  if (size === "sm") {
    return "text-sm";
  } else if (size === "md") {
    return "text-md";
  } else if (size === "lg") {
    return "text-lg";
  } else if (size === "xl") {
    return "text-xl";
  } else {
    return "text-2xl";
  }
}

const Workbench = undefined;

const Messages = undefined;

const SendButton = undefined;

const BaseChat$1 = "_";
const Chat$1 = "a";
const exampleGlassButton = "c";
const glassReflection = "d";
const styles = {
	BaseChat: BaseChat$1,
	Chat: Chat$1,
	exampleGlassButton: exampleGlassButton,
	glassReflection: glassReflection
};

const meteorContainer = "l";
const night = "m";
const shooting_star = "n";
const meteorStyles = {
	meteorContainer: meteorContainer,
	night: night,
	shooting_star: shooting_star};

const movingBorderContainer = "e";
const borderElement = "f";
const glowElement = "h";
const innerContent = "i";
const reflection = "j";
const borderStyles = {
	movingBorderContainer: movingBorderContainer,
	borderElement: borderElement,
	glowElement: glowElement,
	innerContent: innerContent,
	reflection: reflection};

const EXAMPLE_PROMPTS = [
  { text: "Build a todo app in React using Tailwind" },
  { text: "Build a simple blog using Astro" },
  { text: "Create a cookie consent form using Material UI" },
  { text: "Make a space invaders game" },
  { text: "How do I center a div?" }
];
const TEXTAREA_MIN_HEIGHT = 76;
const SHOOTING_STARS_COUNT = 16;
const BaseChat = React.forwardRef(
  ({
    textareaRef,
    messageRef,
    scrollRef,
    showChat = true,
    chatStarted = false,
    isStreaming = false,
    enhancingPrompt = false,
    promptEnhanced = false,
    messages,
    input = "",
    sendMessage,
    handleInputChange,
    enhancePrompt,
    handleStop
  }, ref) => {
    const TEXTAREA_MAX_HEIGHT = chatStarted ? 400 : 200;
    const shootingStars = Array.from({ length: SHOOTING_STARS_COUNT }, (_, i) => i);
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: classNames(
          styles.BaseChat,
          "relative flex h-full w-full overflow-hidden bg-bolt-elements-background-depth-1"
        ),
        "data-chat-visible": showChat,
        children: [
          /* @__PURE__ */ jsx(ClientOnly, { children: () => /* @__PURE__ */ jsx(Menu, {}) }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              ref: scrollRef,
              className: classNames("flex overflow-y-auto w-full h-full relative", meteorStyles.meteorContainer),
              children: [
                /* @__PURE__ */ jsx("div", { className: meteorStyles.night, children: shootingStars.map((i) => /* @__PURE__ */ jsx("div", { className: meteorStyles.shooting_star }, `star-${i}`)) }),
                /* @__PURE__ */ jsxs("div", { className: classNames(styles.Chat, "flex flex-col flex-grow min-w-[var(--chat-min-width)] h-full"), children: [
                  !chatStarted && /* @__PURE__ */ jsxs("div", { id: "intro", className: "mt-[26vh] max-w-chat mx-auto", children: [
                    /* @__PURE__ */ jsx("h1", { className: "text-5xl text-center font-bold text-bolt-elements-textPrimary mb-2", children: "Where ideas begin" }),
                    /* @__PURE__ */ jsx("p", { className: "mb-4 text-center text-bolt-elements-textSecondary", children: "Bring ideas to life in seconds or get help on existing projects." })
                  ] }),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: classNames("pt-6 px-6", {
                        "h-full flex flex-col": chatStarted
                      }),
                      children: [
                        /* @__PURE__ */ jsx(ClientOnly, { children: () => {
                          return chatStarted ? /* @__PURE__ */ jsx(
                            Messages,
                            {
                              ref: messageRef,
                              className: "flex flex-col w-full flex-1 max-w-chat px-4 pb-6 mx-auto z-1",
                              messages,
                              isStreaming
                            }
                          ) : null;
                        } }),
                        /* @__PURE__ */ jsxs(
                          "div",
                          {
                            className: classNames(
                              borderStyles.movingBorderContainer,
                              "relative w-full max-w-chat mx-auto z-prompt",
                              {
                                "sticky bottom-0": chatStarted
                              }
                            ),
                            children: [
                              /* @__PURE__ */ jsx("div", { className: borderStyles.reflection }),
                              /* @__PURE__ */ jsx("div", { className: borderStyles.glowElement }),
                              /* @__PURE__ */ jsx("div", { className: borderStyles.borderElement }),
                              /* @__PURE__ */ jsxs("div", { className: borderStyles.innerContent, children: [
                                /* @__PURE__ */ jsx("div", { className: borderStyles.textareaContainer, children: /* @__PURE__ */ jsx(
                                  "textarea",
                                  {
                                    ref: textareaRef,
                                    className: `w-full pl-4 pt-4 pr-16 focus:outline-none resize-none text-md text-bolt-elements-textPrimary placeholder-bolt-elements-textTertiary bg-transparent relative z-20`,
                                    onKeyDown: (event) => {
                                      if (event.key === "Enter") {
                                        if (event.shiftKey) {
                                          return;
                                        }
                                        event.preventDefault();
                                        sendMessage?.(event);
                                      }
                                    },
                                    value: input,
                                    onChange: (event) => {
                                      handleInputChange?.(event);
                                    },
                                    style: {
                                      minHeight: TEXTAREA_MIN_HEIGHT,
                                      maxHeight: TEXTAREA_MAX_HEIGHT
                                    },
                                    placeholder: "How can Bolt help you today?",
                                    translate: "no"
                                  }
                                ) }),
                                /* @__PURE__ */ jsx(ClientOnly, { children: () => /* @__PURE__ */ jsx(
                                  SendButton,
                                  {
                                    show: input.length > 0 || isStreaming,
                                    isStreaming,
                                    onClick: (event) => {
                                      if (isStreaming) {
                                        handleStop?.();
                                        return;
                                      }
                                      sendMessage?.(event);
                                    }
                                  }
                                ) }),
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm p-4 pt-2 relative z-20", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex gap-1 items-center", children: /* @__PURE__ */ jsx(
                                    IconButton,
                                    {
                                      title: "Enhance prompt",
                                      disabled: input.length === 0 || enhancingPrompt,
                                      className: classNames({
                                        "opacity-100!": enhancingPrompt,
                                        "text-bolt-elements-item-contentAccent! pr-1.5 enabled:hover:bg-bolt-elements-item-backgroundAccent!": promptEnhanced
                                      }),
                                      onClick: () => enhancePrompt?.(),
                                      children: enhancingPrompt ? /* @__PURE__ */ jsxs(Fragment, { children: [
                                        /* @__PURE__ */ jsx("div", { className: "i-svg-spinners:90-ring-with-bg text-bolt-elements-loader-progress text-xl" }),
                                        /* @__PURE__ */ jsx("div", { className: "ml-1.5", children: "Enhancing prompt..." })
                                      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                                        /* @__PURE__ */ jsx("div", { className: "i-bolt:stars text-xl" }),
                                        promptEnhanced && /* @__PURE__ */ jsx("div", { className: "ml-1.5", children: "Prompt enhanced" })
                                      ] })
                                    }
                                  ) }),
                                  input.length > 3 ? /* @__PURE__ */ jsxs("div", { className: "text-xs text-bolt-elements-textTertiary", children: [
                                    "Use ",
                                    /* @__PURE__ */ jsx("kbd", { className: "kdb", children: "Shift" }),
                                    " + ",
                                    /* @__PURE__ */ jsx("kbd", { className: "kdb", children: "Return" }),
                                    " for a new line"
                                  ] }) : null
                                ] })
                              ] })
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  !chatStarted && /* @__PURE__ */ jsx("div", { id: "examples", className: "relative w-full max-w-xl mx-auto mt-8 flex justify-center flex-wrap", children: EXAMPLE_PROMPTS.map((examplePrompt, index) => {
                    return /* @__PURE__ */ jsx("div", { className: "flex flex-row ml-4 mb-2 space-y-2", children: /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: (event) => {
                          sendMessage?.(event, examplePrompt.text);
                        },
                        className: classNames(
                          styles.exampleGlassButton,
                          "group flex items-center w-full justify-center bg-transparent text-bolt-elements-textTertiary hover:text-bolt-elements-textPrimary"
                        ),
                        children: [
                          examplePrompt.text,
                          /* @__PURE__ */ jsx("div", { className: styles.glassReflection })
                        ]
                      }
                    ) }, index);
                  }) })
                ] }),
                /* @__PURE__ */ jsx(ClientOnly, { children: () => /* @__PURE__ */ jsx(Workbench, { chatStarted, isStreaming }) })
              ]
            }
          )
        ]
      }
    );
  }
);

const Chat = undefined;

const chatStore = map({
  started: false,
  aborted: false,
  showChat: true
});

const HeaderActionButtons = undefined;

const ChatDescription = undefined;

function Header() {
  const chat = useStore(chatStore);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: classNames(
        "flex items-center bg-bolt-elements-background-depth-1 p-5 border-b h-[var(--header-height)]",
        {
          "border-transparent": !chat.started,
          "border-bolt-elements-borderColor": chat.started
        }
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 z-logo text-bolt-elements-textPrimary cursor-pointer", children: [
          /* @__PURE__ */ jsx("div", { className: "i-ph:sidebar-simple-duotone text-xl" }),
          /* @__PURE__ */ jsx("a", { href: "/", className: "text-2xl font-semibold text-accent flex items-center", children: /* @__PURE__ */ jsx("span", { className: "i-bolt:logo-text?mask w-[46px] inline-block" }) })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "flex-1 px-4 truncate text-center text-bolt-elements-textPrimary", children: /* @__PURE__ */ jsx(ClientOnly, { children: () => /* @__PURE__ */ jsx(ChatDescription, {}) }) }),
        chat.started && /* @__PURE__ */ jsx(ClientOnly, { children: () => /* @__PURE__ */ jsx("div", { className: "mr-1", children: /* @__PURE__ */ jsx(HeaderActionButtons, {}) }) })
      ]
    }
  );
}

const meta = () => {
  return [{ title: "Bolt" }, { name: "description", content: "Talk with Bolt, an AI assistant from StackBlitz" }];
};
const loader$1 = () => json({});
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full w-full", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(ClientOnly, { fallback: /* @__PURE__ */ jsx(BaseChat, {}), children: () => /* @__PURE__ */ jsx(Chat, {}) })
  ] });
}

const route4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Index,
  loader: loader$1,
  meta
}, Symbol.toStringTag, { value: 'Module' }));

async function loader(args) {
  return json({ id: args.params.id });
}

const route3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Index,
  loader
}, Symbol.toStringTag, { value: 'Module' }));

const serverManifest = {'entry':{'module':'/assets/entry.client-CeYR8CCi.js','imports':['/assets/components-C2bXmY7p.js'],'css':[]},'routes':{'root':{'id':'root','parentId':undefined,'path':'','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/assets/root-IfZQqg7z.js','imports':['/assets/components-C2bXmY7p.js','/assets/theme-DlDW8xfi.js'],'css':['/assets/root-CK2ZX76z.css']},'routes/api.enhancer':{'id':'routes/api.enhancer','parentId':'root','path':'api/enhancer','index':undefined,'caseSensitive':undefined,'hasAction':true,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/assets/api.enhancer-l0sNRNKZ.js','imports':[],'css':[]},'routes/api.chat':{'id':'routes/api.chat','parentId':'root','path':'api/chat','index':undefined,'caseSensitive':undefined,'hasAction':true,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/assets/api.chat-l0sNRNKZ.js','imports':[],'css':[]},'routes/chat.$id':{'id':'routes/chat.$id','parentId':'root','path':'chat/:id','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/assets/chat._id-DY11d7xp.js','imports':['/assets/_index-R__T1VdO.js','/assets/components-C2bXmY7p.js','/assets/theme-DlDW8xfi.js'],'css':['/assets/_index-BQtZEkUE.css']},'routes/_index':{'id':'routes/_index','parentId':'root','path':undefined,'index':true,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasErrorBoundary':false,'module':'/assets/_index-DtCJuje7.js','imports':['/assets/_index-R__T1VdO.js','/assets/components-C2bXmY7p.js','/assets/theme-DlDW8xfi.js'],'css':['/assets/_index-BQtZEkUE.css']}},'url':'/assets/manifest-31a2010c.js','version':'31a2010c'};

/**
       * `mode` is only relevant for the old Remix compiler but
       * is included here to satisfy the `ServerBuild` typings.
       */
      const mode = "production";
      const assetsBuildDirectory = "build\\client";
      const basename = "/";
      const future = {"v3_fetcherPersist":true,"v3_relativeSplatPath":true,"v3_throwAbortReason":true,"v3_routeConfig":false,"v3_singleFetch":false,"v3_lazyRouteDiscovery":false,"unstable_optimizeDeps":false};
      const isSpaMode = false;
      const publicPath = "/";
      const entry = { module: entryServer };
      const routes = {
        "root": {
          id: "root",
          parentId: undefined,
          path: "",
          index: undefined,
          caseSensitive: undefined,
          module: route0
        },
  "routes/api.enhancer": {
          id: "routes/api.enhancer",
          parentId: "root",
          path: "api/enhancer",
          index: undefined,
          caseSensitive: undefined,
          module: route1
        },
  "routes/api.chat": {
          id: "routes/api.chat",
          parentId: "root",
          path: "api/chat",
          index: undefined,
          caseSensitive: undefined,
          module: route2
        },
  "routes/chat.$id": {
          id: "routes/chat.$id",
          parentId: "root",
          path: "chat/:id",
          index: undefined,
          caseSensitive: undefined,
          module: route3
        },
  "routes/_index": {
          id: "routes/_index",
          parentId: "root",
          path: undefined,
          index: true,
          caseSensitive: undefined,
          module: route4
        }
      };

export { serverManifest as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, mode, publicPath, routes };
