import {ReactComponent as BrandIcon} from '../../assets/icons/hp-logo.svg'
import {ReactComponent as PlansIcon} from '../../assets/icons/list.svg'
import {ReactComponent as HelpIcon} from '../../assets/icons/help.svg'
import {ReactComponent as LogoutIcon} from '../../assets/icons/profile.svg'
import * as S from './Sidemenu.styles'

const Sidemenu: React.FC = () => {
  return (
    <S.SidebarContainer>
      <S.TopSection>
        <BrandIcon
          style={{width: '2.25rem', height: '2.25rem', cursor: 'pointer'}}
          />
        <PlansIcon
          style={{width: '2rem', marginTop: '1rem', cursor: 'pointer'}}
          />
      </S.TopSection>
      <S.BottomSection>
        <HelpIcon style={{width: '2rem', marginBlock: '1rem', cursor: 'pointer'}} />
        <LogoutIcon style={{cursor: 'pointer'}} />
        <S.VersionNumber>v13.0.0</S.VersionNumber>
      </S.BottomSection>
    </S.SidebarContainer>
  )
}

export default Sidemenu