import React ,{useState , useEffect} from 'react';
import axios from 'axios';
import {ProfileSkills,ProfileSection,ProfileList,ProfileItem,ProfileItemSpan,SkillsSection,SkillsDesc,SkillsPart,SkillsPartTitle,SkillsPercent,SkillsParent,SkillsParentSpan,ProfileTitle,SkillsTitle,ProfileTitleSpan,SkillsTitleSpan} from './style.js';
const Profile = () =>
 {

    const [skills ,setSkills]=useState([])

    useEffect (()=>{
        axios.get('js/data.json').then(res => {setSkills(res.data.skills)})
    },[])

    const MySkills=skills.map((skillsItem)=>{

        return(

            <SkillsPart key={skillsItem.id}>
                    <SkillsPartTitle>{skillsItem.title}</SkillsPartTitle>
                    <SkillsPercent>{skillsItem.percent}</SkillsPercent>
                    <SkillsParent>
                         <SkillsParentSpan wid={skillsItem.width}></SkillsParentSpan>
                    </SkillsParent>
            </SkillsPart>
        )
    })
        return (
         <ProfileSkills>
            <div class="container">
                <ProfileSection>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileItemSpan>Name</ProfileItemSpan>
                            Waleed Abd Elsabour Moustafa
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Birthday</ProfileItemSpan>
                            21/2/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Address</ProfileItemSpan>
                            Assuit , Mankabad
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Phone</ProfileItemSpan>
                            01126742228
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Email</ProfileItemSpan>
                            waleed.abdoh11@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Website</ProfileItemSpan>
                            <ProfileItemSpan web>www.google.com</ProfileItemSpan>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>

                <SkillsSection>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>

                    {MySkills}

                </SkillsSection>

            </div>
        </ProfileSkills>
        );

}

export default Profile;
