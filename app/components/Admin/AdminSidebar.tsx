'use client'
import React, { useState } from 'react'
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Badge } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses, sidebarClasses } from "react-pro-sidebar";
import { styles } from "../../constants/styles";

type Props = {
    user: any;
}

const AdminSidebar = ({ user }: Props) => {
    const [expand, setExpand] = useState(true);
    const toggleOpen = () => {
        setExpand(!expand);
    }
    return (
        <Sidebar collapsed={!expand} onBackdropClick={toggleOpen} className="!bg-white dark:bg-gradient-to-b h-full dark:from-gray-900 dark:to-black duration-300">
            <Menu className="!bg-white dark:bg-gradient-to-b dark:from-gray-900 h-full dark:text-white dark:to-black duration-300"
                menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        return {
                            ":hover": {
                                backgroundColor: undefined,
                                color: '#212121',
                                fontWeight: 'bold',
                                ":hover:not([disabled])": {
                                    backgroundColor: '#e0e0e0',
                                },
                            },
                        };
                    },
                }}>

                <MenuItem className="menu1" icon={
                    <MenuRoundedIcon
                        onClick={() => {
                            toggleOpen();
                        }}
                    />
                }>
                    <h2>Sparky E-Learning</h2>
                </MenuItem>
                <MenuItem
                    icon={<HiUser />}
                >

                    <Badge icon={HiCheck}>{user.name}</Badge>

                </MenuItem>
                <MenuItem
                    icon={<GridViewRoundedIcon />}
                >
                    Dashboard
                </MenuItem>
                <MenuItem icon={<ReceiptRoundedIcon />} > Invoices </MenuItem>
                <SubMenu label="Charts" icon={<BarChartRoundedIcon />} >
                    <MenuItem className={styles.adminSubItem} icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
                    <MenuItem className={styles.adminSubItem} icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
                </SubMenu>
                <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
                    <MenuItem className={styles.adminSubItem} icon={<AccountBalanceRoundedIcon />}>
                        Current Wallet
                    </MenuItem>
                    <MenuItem className={styles.adminSubItem} icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
                </SubMenu>
                <MenuItem
                    icon={<MonetizationOnRoundedIcon />}
                >
                    Transactions
                </MenuItem>
                <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
                    <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
                    <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
                    <MenuItem icon={<NotificationsRoundedIcon />}>
                        Notifications
                    </MenuItem>
                </SubMenu>
                <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default AdminSidebar