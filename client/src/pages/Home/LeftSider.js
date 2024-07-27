import React from 'react'

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-8 sm:flex-row sm:mb-10">
          <a href="https://www.linkedin.com/in/sameer29/">
            <i class="ri-linkedin-fill text-zinc-400 text-xl"></i>
          </a>
          <a href="mailto:bajpaisameer2412@gmail.com">
            <i class="ri-mail-fill text-zinc-400 text-xl"></i>
          </a>
          <a href="https://github.com/bajpai13">
            <i class="ri-github-fill text-zinc-400 text-xl"></i>
          </a>
          <a href="https://leetcode.com/u/bajpai72/">
            <i class="ri-code-fill text-zinc-400 text-xl"></i>
          </a>
          <a href="https://mavenanalytics.io/profile/Sameer-Bajpai/201873857?index">
            <i class="ri-line-chart-fill text-zinc-400 text-xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-48 bg-[#124f43] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider