export default {
  setUser(state, user) {
    if (user.Resume && !user.Resume.Intension) {
      user.Resume.Intension = {
        DesiredCity: '',
        DesiredJobType: '',
        DesiredIndustry: '',
        DesiredSalaryScope: ''
      }
    }
    state.user = user
  },
  setArticleList(state, data) {
    state.newsletter = data.notices[0].items
    state.jobSchool = data.zhidao
  }
}
