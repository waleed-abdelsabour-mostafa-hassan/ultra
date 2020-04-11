import styled from 'styled-components'

export const ProfileSkills=styled.div`
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileSection=styled.div`
    width: 50%;
    float: left;
`

export const ProfileList=styled.ul`
    list-style: none
`

export const ProfileItem=styled.li`
     margin-bottom: 8px
`

export const ProfileItemSpan=styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold;
    font-weight: ${props => props.web ?'normal' : 'bold'};
    color : ${props => props.web ? '#eb5424' : ''}
`


export const SkillsSection=styled.div`
     width: 50%;
    float: left;
`

export const SkillsDesc=styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const SkillsPart=styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const SkillsPartTitle=styled.span`
    float: left;
`

export const SkillsPercent=styled.span`
     float: right;
    margin-right: 100px
`

export const SkillsParent=styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const SkillsParentSpan=styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width : ${props =>{
        if(props.wid==="100") return '100%'
        else if(props.wid==="90") return '90%'
        else return '80%'

    }}
`

/*
export const SkillsParentSpan=styled.span
.profile_skills .skills .bar .parent span.sp1 {
    width: 100%;
}

.profile_skills .skills .bar .parent span.sp2 {
    width: 90%;
}

.profile_skills .skills .bar .parent span.sp3 {
    width: 80%;
}
*/
export const ProfileTitle=styled.h2`
     font-size: 40px;
    margin-bottom: 20px
`
export const SkillsTitle=styled(ProfileTitle)``


/*.profile_skills .profile .profile-title,
.profile_skills .skills .skills-title{
    font-size: 40px;
    margin-bottom: 20px
}*/
export const ProfileTitleSpan=styled.span`
    font-weight: normal;
`
export const SkillsTitleSpan=styled(ProfileTitleSpan)``

/*
.profile_skills .profile .profile-title span,
.profile_skills .skills .skills-title span{
    font-weight: normal;
}*/
