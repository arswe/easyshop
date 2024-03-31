import { AiOutlineDashboard, AiOutlineShopping } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { FaUsers, FaUserTimes } from 'react-icons/fa'
import { FaCodePullRequest } from 'react-icons/fa6'
import { IoMdChatboxes } from 'react-icons/io'
import { MdPayment } from 'react-icons/md'

export const allNav = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: <AiOutlineDashboard />,
    role: 'admin',
  },

  {
    id: 2,
    title: 'Orders',
    path: '/admin/dashboard/orders',
    icon: <AiOutlineShopping />,
    role: 'admin',
  },

  {
    id: 3,
    title: 'Categories',
    path: '/admin/dashboard/categories/',
    icon: <BiCategory />,
    role: 'admin',
  },
  {
    id: 4,
    title: 'Sellers',
    path: '/admin/dashboard/sellers',
    icon: <FaUsers />,
    role: 'admin',
  },
  {
    id: 5,
    title: 'Payment Request',
    path: '/admin/dashboard/paymentRequest',
    icon: <MdPayment />,
    role: 'admin',
  },
  {
    id: 6,
    title: 'Dectivate Seller',
    path: '/admin/dashboard/deactivateSeller',
    icon: <FaUserTimes />,
    role: 'admin',
  },
  {
    id: 7,
    title: 'Seller Request',
    path: '/admin/dashboard/sellerRequest',
    icon: <FaCodePullRequest />,
    role: 'admin',
  },

  {
    id: '8',
    title: 'Live Chat',
    path: '/admin/live-chat',
    icon: <IoMdChatboxes />,
    role: 'admin',
  },
]
