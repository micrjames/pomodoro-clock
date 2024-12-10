const jsdom = require("jsdom");
const { JSDOM } = jsdom;
import path from "path";
import fs from "fs";

describe("A Pomodoro Clock", () => {
   let dom: typeof JSDOM;
   let document: Document;
   let body: HTMLElement
   beforeAll(() => {
	  const html = fs.readFileSync(path.resolve(__dirname, "..", "src", "index.html"), "utf8"); 
	  dom = new JSDOM(html, { runScripts: 'dangerously' });
	  document = dom.window.document;
	  body = document.body;
	  const bodyEls = body.children;
	  for(const bodyEl of bodyEls)
		 console.log(bodyEl);
   });
   describe("That Has No Timer", () => {
	  test.todo("Should Exist.");
	  test.todo("Should Have the Given Layout.");
	  test.todo("Should Show a Start Time.");
   });
});
