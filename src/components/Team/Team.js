import React from 'react'

const Team = () => {
    return (
        <section class="py-10">
            <div class="lg:px-14 px-3 lg:w-5/6 w-full mx-auto">
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="text-3xl font-bold text-white">People who made it successful</h2>
                    <p class="max-w-2xl mx-auto mt-4 text-xl text-white">
                        Meet Our Team
                    </p>
                </div>

                <div class="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
                    <div>
                        <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-1.jpg" alt="" />
                    </div>

                    <div>
                        <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-2.jpg" alt="" />
                    </div>

                    <div>
                        <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Team