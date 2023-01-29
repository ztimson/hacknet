import {AfterViewInit, Component} from "@angular/core";

@Component({
  selector: 'hn-terminal',
  templateUrl: './terminal.component.html'
})
export class TerminalComponent implements AfterViewInit {
  output: any;
  input: any;

  history: string[] = [];
  historyIndex = 0;

  ngAfterViewInit() {
    this.output = document.getElementsByClassName('console-output')[0];
    this.input = document.getElementsByClassName('console-input-field')[0];
    setTimeout(() => this.banner(), 1000);
  }

  banner() {
    this.stdOut('Konsole 0.1.0 LTS localhost tty1<br><br>localhost login: root<br>password:<br><br>');
  }

  disableInput() {
    this.input.disabled = true;
//    document.getElementsByClassName('console-input-prompt')[0].style.visibility = 'hidden';
  }

  enableInput() {
    this.input.disabled = false;
    this.input.focus();
//    document.getElementsByClassName('console-input-prompt')[0].style.visibility = 'visible';
  }

  process(command: string) {
    (Array.isArray(command) ? command.join(' ') : command).split(';').filter(c => !!c).forEach(c => {
      const parts = c.split(' ').filter(c => !!c);
      if((<any>window).cli[parts[0]] == undefined || (<any>window).cli[parts[0]].run == undefined) {
        this.stdErr(`${parts[0]}: command not found`);
      } else {
        try {
          const out = (<any>window).cli[parts[0]].run(parts.slice(1));
          if(!!out) this.stdOut(out);
        } catch(err) {
          console.error(err)
          this.stdErr(`${parts[0]}: exited with a non-zero status`);
        }
      }
    });
  }

  stdErr(text: string) {
    const p: any = document.createElement('p');
    p.classList = 'console-output-line error';
    p.innerText = text;
    this.output.appendChild(p);
  }

  stdOut(text: string, html=true) {
    const p: any = document.createElement('p');
    p.classList = 'console-output-line';
    p[html ? 'innerHTML' : 'innerText'] = text;
    this.output.appendChild(p);
  }

  enter() {
    this.disableInput();
    const inputValue: string = this.input.value;
    this.input.value = '';
    this.stdOut(`root@localhost:~ # ${inputValue}`, false);
    if(!!inputValue) {
      this.history.push(inputValue);
      this.historyIndex = history.length;
      this.process(inputValue)
    }
    this.enableInput();
//    if(event.key == "Enter") {
//
//    } else if(event.key == 'Up' || event.key == 'ArrowUp') {
//      if(historyIndex > 0) historyIndex--;
//      input.value = historyIndex == history.length ? '' : history[historyIndex];
//      setTimeout(() => {
//        const end = input.value.length;
//        input.setSelectionRange(end, end);
//        input.focus();
//        }, 1)
//    } else if(event.key == 'Down' || event.key == 'ArrowDown') {
//      if(historyIndex < history.length) historyIndex++;
//      input.value = historyIndex == history.length ? '' : history[historyIndex];
//      setTimeout(() => {
//        const end = input.value.length;
//        input.setSelectionRange(end, end);
//        input.focus();
//        }, 1)
//    }
  }
}
