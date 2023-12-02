import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilDrop,
  cilPuzzle,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const sidebarnav = [
  {
    component: CNavTitle,
    name: 'Navegación',
  },
  {
    component: CNavItem,
    name: 'Form Docente-Estudiante',
    to: '/create',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Ver Formularios creados',
    to: '/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default sidebarnav
