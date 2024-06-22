import React from 'react'
import Protected from '../hooks/useProtected'
import AppLayout from '../components/AppLayout'

type Props = {}

const Profile = ({ }: Props) => {
    return (
        <div>
            <Protected>
                <AppLayout />
            </Protected>
        </div>

    )
}

export default Profile