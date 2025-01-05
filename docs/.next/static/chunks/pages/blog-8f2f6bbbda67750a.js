(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7286:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return i(5820)}])},5820:function(n,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return X},default:function(){return q}});var t=i(2729),r=i(5893),o=i(9903),l=i(3168),a=i(7689),s=i(5675),c=i.n(s),d=i(1664),p=i.n(d),u=i(508);function m(){let n=(0,t._)(["\n  align-items: stretch;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin: 0;\n"]);return m=function(){return n},n}function h(){let n=(0,t._)(["\n  position: relative;\n  list-style: none;\n\n  &.item-1up,\n  &.item-hero,\n  &.item-hero-reversed,\n  &.item-hero-secondary,\n  &.item-hero-highlight,\n  &.item-hero-highlight-secondary,\n  &.item-portrait,\n  &.item-portrait-secondary,\n  &.item-super-hero,\n  &.item-super-hero-secondary {\n    flex-basis: 100%;\n  }\n\n  &:first-child {\n    &.item,\n    &.item-1up,\n    &.item-hero,\n    &.item-hero-reversed,\n    &.item-hero-secondary,\n    &.item-hero-highlight,\n    &.item-hero-highlight-secondary,\n    &.item-super-hero,\n    &.item-super-hero-secondary,\n    &.item-portrait,\n    &.item-portrait-secondary {\n      & ~ .tile-item {\n        margin-top: 36px;\n        @media "," {\n          margin-top: 22px;\n        }\n      }\n    }\n  }\n"]);return h=function(){return n},n}function f(){let n=(0,t._)(["\n  --tile-background-color: var(--background-tertiary-color);\n  --tile-color: var(--label-primary-color);\n  background-color: var(--tile-background-color);\n  display: flex;\n  border-radius: 16px;\n  overflow: hidden;\n  z-index: 0;\n  position: relative;\n\n  height: 100%;\n\n  cursor: pointer;\n\n  &.tile-1up {\n    width: 100%;\n    @media "," {\n      flex-direction: column;\n    }\n  }\n\n  &.tile-1up.tile-quick-read {\n    padding: 58px;\n    align-items: center;\n    box-sizing: border-box;\n    display: flex;\n  }\n  &.tile-hero {\n    flex-direction: row;\n    width: 100%;\n  }\n  &.tile-hero-reversed {\n    flex-direction: row-reverse;\n    width: 100%;\n  }\n  &.tile-hero-secondary {\n    flex-direction: row;\n    width: 100%;\n  }\n  &.tile-hero-highlight {\n    display: block;\n    justify-content: flex-end;\n    position: relative;\n  }\n  &.tile-hero-highlight-secondary {\n    @media only screen and (min-width: 1069px) {\n      display: block;\n      justify-content: flex-end;\n      position: relative;\n    }\n  }\n  &.tile-super-hero {\n    flex-direction: column;\n    width: 100%;\n  }\n  &.tile-super-hero-secondary {\n    flex-direction: column;\n    width: 100%;\n  }\n  &.tile-portrait {\n    flex-direction: row;\n    width: 100%;\n  }\n  &.tile-portrait-secondary {\n    flex-direction: row;\n    width: 100%;\n  }\n  &.tile-2up {\n    flex-direction: column;\n    width: 472px;\n    @media "," {\n      width: 333px;\n    }\n    @media "," {\n      width: 100%;\n    }\n  }\n  &.tile-3up {\n    flex-direction: column;\n    width: 303px;\n    @media "," {\n      width: 333px;\n    }\n    @media "," {\n      width: 100%;\n    }\n  }\n"]);return f=function(){return n},n}function x(){let n=(0,t._)(["\n  position: relative;\n  z-index: 0;\n  flex-grow: 0;\n  flex-shrink: 0;\n  overflow: hidden;\n\n  .tile-1up & {\n    width: 100%;\n    height: auto;\n    min-height: 362px;\n    flex-basis: 643px;\n    flex-shrink: 1;\n    @media "," {\n      width: 100%;\n      height: auto;\n      min-height: 255px;\n      flex-basis: 453px;\n      flex-shrink: 1;\n    }\n    @media "," {\n      flex-basis: auto;\n      min-height: 0;\n      aspect-ratio: 16/9;\n    }\n  }\n\n  .tile-2up & {\n    width: 100%;\n    height: 266px;\n    min-height: auto;\n    flex-basis: auto;\n    flex-shrink: 1;\n    @media "," {\n      width: 100%;\n      height: 187px;\n      min-height: auto;\n      flex-basis: auto;\n      flex-shrink: 1;\n    }\n  }\n\n  .tile-3up & {\n    width: 100%;\n    height: 170px;\n    min-height: auto;\n    flex-basis: auto;\n    flex-shrink: 1;\n  }\n"]);return x=function(){return n},n}function g(){let n=(0,t._)(["\n  /* background-image: url(",");\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; */\n  transition: transform 400ms cubic-bezier(0.4, 0, 0.25, 1) 0ms;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n\n  .tile:hover & {\n    transform: scale(1.03);\n  }\n"]);return g=function(){return n},n}function w(){let n=(0,t._)(["\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  flex-grow: 1;\n\n  .tile-1up & {\n    padding: 32px;\n    justify-content: space-between;\n    flex-basis: 0;\n    @media "," {\n      padding: 24px;\n    }\n    @media "," {\n      padding: 24px;\n    }\n  }\n\n  .tile-2up & {\n    padding: 32px;\n    justify-content: space-between;\n    flex-basis: auto;\n    @media "," {\n      padding: 24px;\n    }\n    @media "," {\n      padding: 19px;\n    }\n  }\n\n  .tile-3up & {\n    padding: 24px;\n    justify-content: space-between;\n    flex-basis: auto;\n    @media "," {\n      padding: 19px;\n    }\n  }\n"]);return w=function(){return n},n}function b(){let n=(0,t._)([""]);return b=function(){return n},n}function v(){let n=(0,t._)(["\n  color: var(--label-tertiary-color);\n  font-size: 12px;\n  line-height: 1.33337;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',\n    'Arial', sans-serif;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n\n  .tile-1up & {\n    margin-bottom: 8px;\n    @media "," {\n      margin-bottom: 8px;\n    }\n  }\n  .tile-2up & {\n    margin-bottom: 8px;\n    @media "," {\n      margin-bottom: 8px;\n    }\n  }\n  .tile-3up & {\n    margin-bottom: 8px;\n  }\n"]);return v=function(){return n},n}function y(){let n=(0,t._)(["\n  color: var(--label-primary-color);\n  -webkit-line-clamp: 6;\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  overflow: hidden;\n\n  .tile-1up & {\n    font-size: 32px;\n    line-height: 1.125;\n    font-weight: 700;\n    letter-spacing: 0.004em;\n    font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',\n      'Arial', sans-serif;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    overflow: hidden;\n    @media "," {\n      font-size: 21px;\n      line-height: 1.19048;\n      font-weight: 700;\n      letter-spacing: 0.011em;\n      font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',\n        'Helvetica', 'Arial', sans-serif;\n    }\n    @media "," {\n      font-size: 24px;\n    }\n  }\n\n  .tile-2up & {\n    font-size: 24px;\n    line-height: 1.16667;\n    font-weight: 700;\n    letter-spacing: 0.009em;\n    font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',\n      'Arial', sans-serif;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    overflow: hidden;\n    @media "," {\n      font-size: 19px;\n      line-height: 1.21053;\n      font-weight: 700;\n      letter-spacing: 0.012em;\n      font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',\n        'Helvetica', 'Arial', sans-serif;\n    }\n  }\n\n  .tile-3up & {\n    font-size: 19px;\n    line-height: 1.21053;\n    font-weight: 700;\n    letter-spacing: 0.012em;\n    font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',\n      'Arial', sans-serif;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    overflow: hidden;\n  }\n"]);return y=function(){return n},n}function k(){let n=(0,t._)(["\n  color: var(--label-tertiary-color);\n  font-size: 14px;\n  line-height: 1.28577;\n  font-weight: 600;\n  letter-spacing: -0.016em;\n  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',\n    'Arial', sans-serif;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  .tile-quick-read.tile-1up & {\n    margin-top: 16px;\n    @media "," {\n      margin-top: 12px;\n    }\n  }\n  .tile-1up & {\n    margin-top: 12px;\n    @media "," {\n      margin-top: 12px;\n    }\n  }\n  .tile-2up & {\n    margin-top: 12px;\n    @media "," {\n      margin-top: 8px;\n    }\n  }\n  .tile-3up & {\n    margin-top: 8px;\n  }\n"]);return k=function(){return n},n}function P(){let n=(0,t._)(["\n  display: flex;\n  justify-content: center;\n"]);return P=function(){return n},n}function j(){let n=(0,t._)(["\n  border-radius: 30px;\n  display: inline-block;\n  transition:\n    background-color 300ms cubic-bezier(0.4, 0, 0.25, 1) 0ms,\n    border-color 300ms cubic-bezier(0.4, 0, 0.25, 1) 0ms,\n    color 300ms cubic-bezier(0.4, 0, 0.25, 1) 0ms;\n  font-size: 17px;\n  line-height: 1.23536;\n  font-weight: 600;\n  letter-spacing: -0.022em;\n  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',\n    'Arial', sans-serif;\n  border: 2px solid var(--label-primary-color);\n  padding: 10px 24px 9px;\n  border-color: var(--label-primary-color);\n  color: var(--label-primary-color);\n  background-color: transparent;\n  cursor: pointer;\n  &:hover {\n    color: var(--fill);\n    border-color: var(--label-primary-color);\n    background-color: var(--label-primary-color);\n  }\n"]);return j=function(){return n},n}let _=u.ZP.ul(m()),S=u.ZP.li(h(),a.w5.md),z=(0,u.ZP)(p())(f(),a.w5.sm,a.w5.md,a.w5.sm,a.w5.md,a.w5.sm),F=u.ZP.div(x(),a.w5.md,a.w5.sm,a.w5.md),N=(0,u.ZP)(c())(g(),n=>{let{src:e}=n;return e}),H=u.ZP.div(w(),a.w5.md,a.w5.sm,a.w5.md,a.w5.sm,a.w5.sm),Z=u.ZP.div(b()),A=u.ZP.div(v(),a.w5.md,a.w5.md),I=u.ZP.div(y(),a.w5.md,a.w5.sm,a.w5.md),D=u.ZP.div(k(),a.w5.md,a.w5.md,a.w5.md),T=u.ZP.div(P()),E=u.ZP.button(j()),C=[1,2,2,2,2,3,3,3,3,3,3],L=n=>{var e;return"".concat(null!==(e=C[n])&&void 0!==e?e:3,"up")};function q(n){let{posts:e}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.$0,{contained:!0,gutterY:!0,variant:"secondary",children:[(0,r.jsx)(l.Z,{variant:"section-head",as:"h2",children:"Latest News"}),(0,r.jsx)(_,{children:e.map((n,e)=>{let i=L(e);return(0,r.jsx)(S,{className:"tile-item item item-".concat(i),children:(0,r.jsx)(O,{post:n,impositionLayout:i})},n.date+n.slug)})})]}),e.length>11&&(0,r.jsx)(o.$0,{contained:!0,gutterBottom:!0,children:(0,r.jsx)(T,{children:(0,r.jsx)(p(),{href:"/blog/archive/",children:(0,r.jsx)(E,{children:"View Archive"})})})})]})}let O=n=>{let{post:e,impositionLayout:i}=n;return(0,r.jsxs)(z,{href:e.url,className:"tile tile-".concat(i),children:[(0,r.jsx)(F,{children:(0,r.jsx)(N,{width:"643",height:"362",src:e.image,alt:"Post Image"})}),(0,r.jsxs)(H,{children:[(0,r.jsxs)(Z,{children:[(0,r.jsx)(A,{children:e.category}),(0,r.jsx)(I,{children:e.title})]}),e.date&&(0,r.jsx)(D,{children:new Date(e.date).toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"})})]})]})};var X=!0}},function(n){n.O(0,[774,888,179],function(){return n(n.s=7286)}),_N_E=n.O()}]);