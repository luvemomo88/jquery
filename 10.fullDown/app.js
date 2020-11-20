// $(function () {
//   var header = $(".header")
//   var gnb = header.find(".gnb")

//   header.on("mouseover", function () {
//     header.stop()animate({ height: 400 }, "fast")
//   })

//   header.on("mouseleave", function () {
//     header.animate({ height: 80 }, "fast")
//   })
//   gnb.find('ul').css('min-height','400')
// })

$(function () {
  var header = $(".header")
  var gnb = header.find(".gnb")

  var headerheight = header.innerHeight()
  var subMenuHeight = gnb.find("ul li").innerHeight()
  var paddingValue = 40

  var menuCount = []

  gnb.find("ul").each(function () {
    var liCount = $(this).find("li").length
    menuCount.push(liCount)
  })

  var maxCount = Math.max.apply(null, menuCount)
  var autoHeight = headerheight + paddingValue + subMenuHeight * maxCount

  header.on("mouseover", function () {
    header.stop().animate({ height: autoHeight }, "fast")
  })

  header.on("mouseleave", function () {
    header.stop().animate({ height: headerHeight }, "fast")
  })
})
