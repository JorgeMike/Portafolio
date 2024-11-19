import Presentation from '@/components/presentation';
import SectionNavigator from '@/components/section-navigator';
import React from 'react';

export default function AboutMe() {
    return (
        <>
            <main className='my-5'>
                <Presentation />
                <SectionNavigator id='experience' label='Experience' />
            </main>
            <main>
                <SectionNavigator id='presentation' label='presentation' />
                <section id='experience'>
                    <h2 className='text-center'>Experience</h2>
                    <p>
                        I have been working as a software developer for over 10
                        years. I have experience in developing web applications,
                        mobile applications, and desktop applications. I have
                        worked with a variety of technologies, including Java,
                        JavaScript, React, Angular, and Node.js. I have also
                        worked with databases such as MySQL, PostgreSQL, and
                        MongoDB. I have experience with cloud platforms such as
                        AWS and Azure. I have worked on projects of all sizes,
                        from small websites to large enterprise applications. I
                        am passionate about software development and always
                        looking to learn new technologies and improve my skills.
                    </p>
                </section>
                <SectionNavigator id='skills' label='Skills' />
            </main>
        </>
    );
}
