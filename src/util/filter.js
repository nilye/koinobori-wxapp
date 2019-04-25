export default {
  formatDate: function(d){
    if (d){
      if (typeof d === 'string'){
        d = new Date(d)
      }
      let mon = d.getMonth() + 1,
        day = d.getDate(),
        h = d.getHours(),
        m = d.getMinutes()
      if (m<10){
        m = '0'+m
      }
      return mon+'月'+day+'日'+' '+h+':'+m
    } else {
      return 'N/A'
    }
  }
}
