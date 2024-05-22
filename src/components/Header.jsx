import { LOGO } from '../utils/constants'
import { USER_AVATAR } from '../utils/constants'

const Header = () => {
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="Logo" />
      <div className="flex p-2">
        <img className="w-12 h-12" src={USER_AVATAR} alt="usericon" />
        <button className="font-bold text-white font-bold">Sign Out</button>
      </div>
    </div>
  )
}

export default Header
