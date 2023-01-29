export type NavigationItem = {
  disabled?: boolean,
  icon?: string,
  label: string,
  url?: string | string[]
}

export const navigation: NavigationItem[][] = [
  [
    {icon: 'home', label: 'Home', url: '/'},
    {icon: 'request_quote', label: 'Contracts', url: '/contracts'},
    ], [
    {icon: 'wifi', label: 'Networks', url: '/networks'},
    {icon: 'local_fire_department', label: 'Firewall', url: '/firewall'},
    {icon: 'dns', label: 'Servers', url: '/servers'},
  ], [
    {icon: 'code', label: 'Scripts', url: '/scripts'},
    {icon: 'terminal', label: 'Terminal', url: '/cli'},
  ], [

  ]
];
