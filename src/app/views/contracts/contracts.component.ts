import { Component } from "@angular/core";

export type Contract = {
  icon: string,
  name: string,
  description: string,
  accepted?: boolean
}

@Component({
  selector: 'hn-contracts',
  templateUrl: './contracts.component.html'
})
export class ContractsComponent {
  contracts: Contract[] = [
    {icon: 'wifi_disable', name: 'Crack Network', description: 'Gain unauthorized access to a network'},
    {icon: 'currency_bitcoin', name: 'Steel Wallet', description: 'Hack into a server & retrieve a crypto-wallet'},
    {icon: 'bug_report', name: 'Deploy Trojan', description: 'Gain full access to a target server'},
    {icon: 'keyboard_hide', name: 'Deploy Keylogger', description: 'Deploy a keylogger to collect valuable intel'},
    {icon: 'delete', name: 'Delete Data', description: 'Delete some sensitive files on a remove server'},
    {icon: 'file_copy', name: 'Steel Data', description: 'Copy some sensitive data without being detected'},
  ]
}
