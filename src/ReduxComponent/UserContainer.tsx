import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux'

function UserContainer({ userData, fetchUsers}) {
  useEffect(() => {
    fetchUsers()
  }, [])
  
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div className='m-10'>
      <h2><b>User List - Using Redux Thunk - apply middleware </b></h2>
      {
        userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData : state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)