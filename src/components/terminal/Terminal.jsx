import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { commands } from "./commands";
import { downloadResume } from "../../utlis/downResume";

const Terminal = forwardRef(function Terminal({ sectionScroll }, ref) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isPrinting, setIsPrinting] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const bottomRef = useRef(null);

  const loading = [
    "Scanning...",
    "██░░░░░░░░ 20%",
    "████░░░░░░ 40%",
    "██████░░░░ 60%",
    "████████░░ 80%",
    "██████████ 100%",
    "✓ Complete",
  ];

  //ALL THE HELPER FUNCTION................................................................................................................
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); //promise return pending.......... and Resolved........

  //PRINT OUTPUT LINE BY LINE..................................................................
  const printOutput = async (lines) => {
    setIsPrinting(true);
    for (const line of lines) {
      setHistory((prev) => [...prev, line]);
      await delay(150);
    }
    setIsPrinting(false);
  };

  //PRINT LOADING....................................................................................
  const playLoading = async () => {
    setIsPrinting(true);

    for (const line of loading) {
      setHistory((prev) => [...prev, line]);
      await delay(250);
    }

    setIsPrinting(false);
  };

  // input type one by one................................................
  const typeCommand = async (command) => {
    let text = "";

    for (const char of command) {
      text += char;
      setInput(text);
      await delay(70);
    }
  };
  //END .......................................................................................................................

  //HANDLE [...ENTER...,UP,...DOWN].......................................................................................
  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      await executeCommand(input);
    }
    //raed arrow up command for history look up.............................................................
    if (e.key === "ArrowUp") {
      e.preventDefault();

      setHistoryIndex((prev) => {
        const newIndex = prev < commandHistory.length - 1 ? prev + 1 : prev;

        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");

        return newIndex;
      });
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setHistoryIndex((prev) => {
        const newIndex = prev > 0 ? prev - 1 : -1;

        if (newIndex === -1) {
          setInput("");
        } else {
          setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
        }

        return newIndex;
      });
    }
  };
  //END.......................................................................................

  //EXECUTE COMMNAD() .........do only command logic.....................................................
  const executeCommand = async (command) => {
    //Hide banner → type command → add it to history → normalize the command.
    setShowBanner(false);
    await typeCommand(command);
    setHistory((prev) => [...prev, `C:\\Mission>  ${command}`]);
    const cmd = command.toLowerCase().trim();
    //...................................

    //handle clear..................
    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    // handle invalid commands............
    if (!commands[cmd]) {
      await printOutput([
        `Undefined command: ${command}`,
        `Type "help" to see available commands.`,
      ]);

      return;
    }

    //skip the loading animation..........
    if (cmd !== "help") {
      await playLoading();
    }

    //Print output..................
    await printOutput(commands[cmd]);

    // Wait before scrolling
    await delay(500);

    //download resume or scroll to section...........
    if (cmd === "resume") {
      downloadResume();
    } else {
      sectionScroll(cmd);
    }

    //save history...................................
    setCommandHistory((prev) => [...prev, command]);
    setHistoryIndex(-1);
    setInput(""); //clear
  };
  //END.................................................................................................

  // CHANGE COLOR WITH TEXT........................................................
  const getTextColor = (text) => {
    if (text.startsWith("C:\\Mission>")) {
      return "text-cyan-400";
    }

    if (text.startsWith("Opening")) {
      return "text-green-400";
    }

    if (text.startsWith("Loading")) {
      return "text-yellow-400";
    }

    if (text.startsWith("Downloading")) {
      return "text-purple-400";
    }

    if (text.startsWith("Undefined")) {
      return "text-red-400";
    }

    return "text-white";
  };

  //lets the child decide which methods or values the parent can access.......................................
  useImperativeHandle(ref, () => ({
    executeCommand,
  }));

  //history scroll on every history updation........................................
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollTo({
        top: bottomRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  return (
    <div className=" bg-black h-full  text-white font-mono flex flex-col  ">
      <div ref={bottomRef} className=" flex-1 overflow-y-auto  ">
        {/* storing fresh history of what user type.......................... */}

        {showBanner && (
          <div className="mb-4 text-cyan-400">
            <p>[NEXUS MISSION CONTROL v2.0]</p>
            <p>✓ Systems Online</p>
            <p>✓ Operator Authenticated</p>
            <p>Type "help" to continue...</p>
          </div>
        )}

        {history.map((cmd, index) => {
          return (
            <div key={index}>
              <p className={getTextColor(cmd)}>
                <span>{cmd}</span>
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex mb-2  mt-auto">
        <span className="mr-2 text-white ">C:\Mission&gt;</span>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={handleKeyDown} //which key was pressed
          className=" w-full caret-black  text-white border-b-3 outline-none   border-amber-50   bg-cyan-400 text"
          autoFocus
          disabled={isPrinting}
        />
      </div>
    </div>
  );
});

export default Terminal;
