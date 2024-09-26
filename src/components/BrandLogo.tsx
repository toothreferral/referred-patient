import Logo from '@/assets/toothreferralsLogo.png';
import sideLogo from '@/assets/toothreferralsSidebarLogo.png';
import { Link } from 'react-router-dom';

function BrandLogo({
  className,
  side,
}: {
  side?: boolean;
  className?: string;
}) {
  return (
    <Link to='/' className={className}>
      <figure>
        {' '}
        <img src={side ? sideLogo : Logo} alt='Local venda Logo' />
      </figure>
    </Link>
  );
}

export default BrandLogo;
