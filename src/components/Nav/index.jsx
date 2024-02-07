import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg';
import { ReactComponent as CoinIcon } from 'assets/icons/coin.svg';
import { ReactComponent as ChainIcon } from 'assets/icons/chain.svg';
import { ReactComponent as BridgeIcon } from 'assets/icons/bridge.svg';
import { ReactComponent as MoreIcon } from 'assets/icons/more.svg';

import NavigationLink from 'components/NavigationLink';

import { NavContainer } from './styled';

export default function Nav() {
  return (
    <NavContainer>
      <NavigationLink
        icon={<DashboardIcon />}
        to="/dashboard"
        title="Dashboard"
      />
      <NavigationLink icon={<CoinIcon />} to="/coin" title="Coin Info" />
      <NavigationLink icon={<ChainIcon />} to="/chain" title="Chain Status" />
      <NavigationLink icon={<BridgeIcon />} to="/" title="Bridge" />
      <NavigationLink icon={<MoreIcon />} to="/more" title="More" />
    </NavContainer>
  );
}
