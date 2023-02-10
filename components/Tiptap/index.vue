<template>
  <div
    class="appearance-none bg-white dark:bg-slate-500 dark:text-white dark:placeholder-white rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm">
    <div v-if="editor" class="border-b-2">

      <!-- Bold -->
      <button @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD00lEQVR4nL3YT0wcVRwH8GEDkmCCiCiF6EEwkmiNaWyjtVVLXBIPLBo5GFuSHjSgSM0CtdWL225N2gsJiokmJiZqjAkHSOQgFS2yjQ0c6IZSIZQeJOIiMO/7e7NrjP/Sn3nTJaW7M7tv8dGX/JI5zHvz2e/83uzuWJbmIKL7AbQAaJNSNgG4w7rVg5kDQoiXiWiWiHhzAfiXiCYAdKZSqXu2HWPbdjmA7zIhXqVwAL4VQry2vr5eaxQSiXBASnkngOkbF8yPyqg5AB+r9KSUQQCPSCnrHMe5i5lvKwj0xdAPozNzV6c2Fp9f/JnPTlwsFJQrzb8BjBPRs1qg+OUr3d+MT6uJbqnjpV8SxkCbYNcAvJkXBCBu+uKUo/ccx3ncFyOE2HerMHQDNeQLIqL++cUlHr8wkzVxZGSE1ZMgX5WXl3MwGHTP1wT9s7a2VuOTEOa/Hpvy7Jl4PM7hcNi96K7HdvMr7a9zd3c4qw4dOsi1tTVcVFTE0WhUN6kXsjBqS15vtNyTLcviziNh/mlxiVMpx7MSiWVuaQm5KJ2kALzr1cxP63waSwO0gaqp2cFNTU06CX3k1T+vmgSlUo57+yoqKm6av5z4jYdGJ91Sx+mEPvFKKGIa1NHRzmVlZTfNn750hc9dmOFzP864x2nQp14JDZgEOQ7xzp0P8549u7MSGh6d5OGzk/xrOiEiOu0F+twk6MSJiHvuwMCATlN3eoG+1AXt3befe469w6dORbPq6NFebmxsdM8LhUIshMi7phDiOS/QV7ogS6Oqq6t5cHBQJ51rUspKL9BnJhLq7+/nM2dOc0NDAwcCAe7r68u35uUsTBr0gckesu01bm5u5uLiYo7FYrnW/NAP9J7pbZ9ILHNlZSW3trbmumVPeYKklO2mQamUw21tbW4/+ay3xMxFfgkd2A5Qb28Pl5aW+q130vIbyWTybtXxpkGhUIjr6+u91vo9mUxW+YLSKc2ZBMViE1xSUsJdXV1evdOXE5MGvW8KFItNcF1dHVdVVfHCwkImhlZXV3fkBdm2/YQfZHZ2liOR618He5/czz1vvc3R6MmsOn78mLvdVTIKMzY2lrWWlLLD0hmq44nokhdoRPMnrIKonlG3KTOZdJ1X/4gt3SGlfElnt9HWakUIcZ82ZiMlAN+bxgD4S/0qLQizKaUHoDqPjGH+JKIXt4TZhAoS0R8GMATgGcvEIKIDANb/B2bKtu2HLJPDtu17AQxvIZU3CtpNhQ4Aj6q/KwCED0K9wDoP4Ih6t7RtkMyhdqHjOA8CeB7AYSJqVQ/UlZWV201c4D/AKkIlEvMhZwAAAABJRU5ErkJggg==" /> -->

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5klEQVR4nN2SMQrCQBBFH4I2NpYxKbyEXiAHMI0QcwXFWr2LJ9FeK7VI6SnERrGILCQwhCTuht1CP/zuz7yZ2YV/VR8IgRhISp4DETDJc60UVjROKjwDvDaAqsmTBojxJrJBWZ186khk1LmsAQp5IqNg1gFdkYldbzB1/QZjU8AKSIE3kNX4CdyAHTAwBaQNjbMKX4HABNA0eVbjC9DTBcjCOvnAGniJ7BKLgEIbkT3hADAU2YcLQCCydxeArcgebQKCvLl85IUuQBZlmj6bfNNDi+Y+BhoB+y+bqB+jbq7Ooj357+kDQXWF3a9tL28AAAAASUVORK5CYII=" />
      </button>

      <!-- Italic -->
      <button @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }">
        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAADPUlEQVR4nN2YTUwTURDHC2pr8aAmpiTe/Ap4osYbSE3g7MHEcvLgwQOYFBv0YDxIAlcvfgTuNjG0GNKCJBoTw0cRjZhQpC0YpQZBKi3/2ZaoByNj3tpqwVJ2960aneSfvG3ezv46M+/tvLVY/ndj5jJFUfYKifHfALABOEVEt4loEsBnImIhAF+IaATA1dXVVYepD25v53Jf38hZoVwUDhPRDQCUB9hCCgCPaUA+FWZ46m5oZGZicjYM4KtGkI26ZQpQT3/4fO/gWCr48OladCZhBOSHAFyUgsH3GpkXINFZOZicVrPZ7D7dIPPz8/ZcnayZAKEq9uotP5mIibFXF4yiKIeIKKb1QQMDAywWXV7iuti8l/E5HhqfEml7rCdFJwCk9PzzSCTC9fX1XFZWxh6PR70uNi+dXuEPyykx/sTM1i1hVlZWakWOjaSjtraWnU7nL7+LFImo5EBUiXHv4Nigr2/4+qYwROQkoqwRmMXFRbbZbOz1eovWjUiViE5hpMaex3p8wZEzm9XMXgBvjBar3+9XaycUCpWcV5Ayof5S0bkjs3qam5vZbrdzMpksOS9f1LlrhZm3FStil+zSrqqq4sbGRj3LXhWAk8WAHsnAxONxdXV1dnYauf/mxto5KBudrq4utX7C4bDue8X2kkgkdhbWTpsMDBGx2+1mh8MhnBv1ca4wXQEZGABcWVnJTU1NMn8qyszb80AvZIBGR0fVdHV3d0tFGcCFPNBrGUcdHR0qUDQalQVKAdgtamhKxlFDQwNXV1dLwRRAXRER6jXqIJlMckVFBbe0tJgCRERDAuiaUQfBYFBNVyAQMAtoWuxDx4068Hq9bLVaeWFhwSyg+/m9aNqIg5qaGq6rqzML5ud+pCiKW8+NkUiEW1tb1deFy+XatBnTIwATzLxDBRLnLAAPzG5XSbsymUzmyLp3mjhZAkiYGH7WqCUiOla0JxKURPTuD8KMEdEBSylLpVL7iWj8N4NkALQyc7lFi4kXHRFd1nvy0FC4y+LDAxHtsRixpaWlXTmwOQmQjwD8RHR6Xd8ja+l0+igRXQJwT3QIG7965Jq89wCe5QDaxJHKVAiLRhONuqZD379o3wDr9xGnMX/RQwAAAABJRU5ErkJggg==" /> -->
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVR4nO3VQQoBARiG4ddirsABZDvkGrIjyV4OIGs5gOzlALLXHECuIXu2LGlq1Leipv+Thbf+1dT3NDU18AM1gQEwfHP587Qs0P8w/rpeWSB1v4E2Ax7FrTG0E2DsAM4CtKLHqzJ+B5JooCvAAUMLAZYOIBMg/zRDqwAXAerRQEPGrwUY2kiAPYZWAswdwFGATvR4AtwEqEUDbRk/YWgiwNYBbASYRgz+f5Hf7QluokZsoeyrhAAAAABJRU5ErkJggg==" />
      </button>

      <!-- strike -->
      <button @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }">
        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAESElEQVR4nL2YTUwkVRCAh9ENMMEooIYejBIIXJS/mHDhT8GD0YsJcFEPAlETAUNivBAgxgtovMzJeF5/DuASD7sHBZwZQtQEgewKw7owf9gMQ09X9Qz+bOImZepBs7sz3Uz3TuNLKnnv9fv5uqpevR+Xy8Eky7IHEVsAoFvTtJcQsVdV1WeJ6JLr/0hE5EbEFxDxcwDYAIB/EZEM5G8A+AERhxnacRBEfAwApgEgYgJgKgCQBIAR/pmCQeLxeCkifggAql0QA7Al/rEHhgGADgDYLRQkS24cHx8/aQuEiC4BwCcAcMdhGF1Ty0T0sB1fWbwIkCz52IqJnkHE35ya9DCp0K3w/n11v+/F6UhJsZb+AYCnTWEURfECwN55E4TDYZqYmKDGxkYqLS0lj8dDTU1Noi4SieS0j8Rlmru6SruRE6jQrago78uHuuk+NYRJp9OV+TSzuLhIVVVV5Ha7qbu7m8bGxoR0dXWJOkmSaGlpKadfNH5AySNF5BOHR2cwpxInoqJsB3afLkdTmK2tLSovL6e6ujpaWVnJ+R4MBqm2tpYqKiooFArZMms6na7P9pupfJ0GBweFiTY3N03brK+vizZDQ0P31bO5VBVEPqWqFI7K2X1fO4PRNO15K0tbkiQaGBjI+7d9fX3k9XrvavZmRPiMfJAU5dh+QpTZsfU2mqa9c692frSi1uLiYhofH8/bjn3I5/OdlRkgy2coEpNJPrhbBwDvCxhVVV+xauf6+nrq7e215Rs25C1dOwtWO01NTVFRURHNz887DqSq6svsO+UAcNtqp0QiQc3NzVRSUkIzMzOi7BQQxz/eHnqsNA4Gg9Te3i6kra1NLH2OFBx3ysrKRJmdmAOl3k4X7mthjn19v3rbLlD7qfDkDMExh6EYjiEZjqHtAAHAF7r/jDql8kQiQbOzsyIGsVntmBMAXtU1ZMlkaEPm5uaE409PT1vt88fZEYQzABB2Gqqnp4caGhqstv8o+9zzotWV5vP5DDfObOHgyUHUwpjHmUzmcaPzT5eVQ7skSdTf329p66iurrYCNGN6DgqFlEd+/jV07UYofCff5rqxsWE6ydramohTw8PD+Rw5pWlahSnQ5SvBNy9fCVz/+rvg7vXtPcObxfb2tljmfMQIBAI53/1+P9XU1FBlZSXt7OycC6Rp2rumMPcCsSxc++k9RFw1Goh9iE3Hcaezs5NGR0dpZGSEOjo6xOri2LS8vJxPO78Q0UPnAvGJ7atvA298ueB/nfOyLHsA4HujAaPRKE1OTlJLS4s4vrK0traKvS4Wi+WDuc1XbFcBl0O/nSVvQcZdhSQAeJTv7g7BfONyIimK4kXEWIEwq44+Nqiq+hwiag8CAwBrBd3lzRKePL/8ZRPoajKZLHNdVIKTqH5oAeRPRPwg5751ESmTyTzBjxCImDAAkQHgs1QqVX3hIEYpnU436E94qVTqqUIG+w8+GrEgthPlgwAAAABJRU5ErkJggg==" /> -->

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVR4nO2SQQqAIBBF3wHqIoF2kZaFeJ/swLVqVQgGrjTNooUPPsxC5jEfoZJIDyhAZ0YBMiSYHizXLmNIIN++IITwFtm5OKIKPq9oAXbgiMS+MTmC7cbyK2uOwCRcMFMAUb9pDFEritF5Fdm5OC0wuDRvCP7JCYyRQQkrLgo7AAAAAElFTkSuQmCC" />
      </button>

      <!-- Underline -->
      <button @click="editor.chain().focus().toggleUnderline().run()"
        :disabled="!editor.can().chain().focus().toggleUnderline().run()" :class="{ 'is-active': editor.isActive('underline') }">
        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAADMklEQVR4nO2YTWgTURDH17R+YNN4UxD1IuKpFA+2Qg8lgoIIngQPiiLe2nqSpngRQa8eRCoeFKHtRWu9hCJCKRRrS0NKDRRbTSCtbdqk2fxnQ6BaUUcmzZZN3GR3m8Qc9MFAdt97M7+deTM7G0X5FwYz7wKwr1bGXa+GJ0a+LMcfEtEYgDUi4pysE9EEgNsAjlQVJJlMHiSiu0S0PPRmkldWEzpEMVkHcIeZ6yoKoqrqISJ6DGBDNxZdjLGqpqyAsgJgSEJaNkgsFttLRPcAfF1cWuGpmXmeCy/mGZNruS/zFmCPyoIBcJ6IFnSF5QIB+EVEJxyDqKrqAfDUTiiciuh1BJNOp48D+CSb/X4/S0Lp0tbWlqfc7FDLGuMe0VEAtcrMO2zBENFpAKRvDoVC3NPTswXT29trCSRrdCjZKzoKvZROp49ZwmiadjZXP/5QoCu3Gxb9IUqE7YoVzMliMFQFoJLZlslk9kuRK2VAqbyHposCARi0MqBUHuiH6TtP07QzdgwolQ+ZQF0wy6qxGgI9y4OR1LNrQKkOUJKZdxu9c6uWQLQJddl4mF/YNeB2u7mrq8s2UGdnJzc2NtoBmtqq2nJh10BTUxN7vV7bQO3t7dzc3Gx3/UU9ZLN2DXR3d3N9fT0Hg0HLtYFAILvWbogBhJl5pwBN2gUKh8PZELS2tnI8Hi+6TuZaWlrY4/FwJBKx7VEiui4he+5gA/f19bHL5coaFC+YeUbmZM3AwICpDukwB4ffs38kwGtrqnHO7yjLyAAlTy8hkXPS0dGRFfkt92Suv7+/6P7xwCxPTn/k4dEgz31eMIZtRqr00VwH5wgqEomwz+fLHtqGhoZsBspvuWcVpmIeAvBWP9jvnAJRFQTATR3Ia7U4lGvStiNmzZkJTCSRSLiNBbLk4fYXtLFOxKR9LYT5rqrqqbx3mtABCNYgVJlUKnWuWJN2gIg+/MUzE7b8HMp9+ryuMsgGEd2PRqN7FLtD07RLAOYrDJMG8CCVSh1WtjOYuQ7AVSIaB/Bzm974JhUYwLWK/kWT2fwIuAHgCYBRIloyFlTJFPlIkO4BwEsi8kk5yUvl/0Mpf/wG+IJhIDQEKFIAAAAASUVORK5CYII="> -->

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVR4nO2STQrCMBCFvwuoIPUaehW1ingbFfR2xa249QLxZ6ELiQRiGUpJMxIQpQ/eJnwzL5kJfEk74AZsE7OlHoAF7onZUlY4JftRkW0DmtSO6EdHdBFFnQDXE9xZE7AXhZMAlwuu0ARsROEB6Ncw7uwouJUmYOCfbL1PwBzoeueV5gbIUGoKPCtLrLNjxtrmMsQEmpuGHUUpA9Z+iVf/wwp/ph7Lf2gELICl0q5mGBPgvqO2+duzmAB3i2QveAE+T4LpIdTAHwAAAABJRU5ErkJggg==" />
      </button>

      <!-- code -->
      <button @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABxklEQVR4nO2YO0gDQRRFj38QtRNbjb1IAhY2NlrYqJUgSMBOhRTip00gKNr7aSzTBFGsFbSxsFFIY2ljHRKtxHxWBt7CsGya7LqzmDkwxcx9b/ZdkpmdWbBYLBaLpUMYAFLA/B+3lDwrNLqAA+ATcCJqVWBPnh2Y4wgLdzztMGjxCaBu0EANmAhiYNtg8Y60zSAGsjEwkA1iIA3cG27pIAYspsnFYA3krAE6/Beoy1ZYiLOBJlBuoV3JXMPaWFlynDgYaACrQDdw66MvylxL0r+RWJXTiIOBjBZ/49E+gB7RXHPXWnzGtAF1UnXZ99Hzoo0BP9q4Oiq7nJgyUNTO62s+/2nVn2xhrik5yBxFEwaWJaYXePfRH7R53nx0laNyFSsmDJSAEYmbkluUrq+LNuuTW5UcZI6SqTXwqN1f54BvrcBBGb/05Ki1sCBaH3BnehcqaGvhXMYupD8EfHniz0RTOYW4vMhOgWngVfozkr/hE/siscpIbI8So/Kyem4z3wnLQLtXSrXrPIVQvBP0SrkVUhHGLvUJ+bRhqvgaME5AjgwayBMCarvbBSoRFl4BdsL6tOjSDyQj+LiblGdZLBaLxfL/+QXcUAKpdiIupQAAAABJRU5ErkJggg==" /> -->

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9klEQVR4nO2UTQrCMBCFv41u9AZ6hao7f+gNXFjwBzyE9BIVryFeSXoTFUFBCUwl1iZNK1npg6wm8z3Imwn85UE74AokPuAt4AY8gJMPg1Dg6hzrAAbACugZ6rFmsM/VetLbN8E7wFrOwnDnoBlscrWl1q9Yb2oCkXZhaDBINYNJrjbU+iNhvjS2FUVt4C7wuwSuqwHMNI5ifjyNOl3qB9wpYk2LXCsGbHqNaRWDgyVgq4HrE6WWgDMZWWUht0sCLprEUZUxDR0Cto5p2aLFDgFbFy2TWvM5ENQIOJBe0zdjVeoQ8Fc6C/xmCPhrJcAF2PqA89t6Ar1bT9WRah6dAAAAAElFTkSuQmCC" />
      </button>

      <!-- code block -->
      <button @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }">
        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACG0lEQVR4nO2Xu0oDQRSGPxUtRC2EKNgEESsRBBtTiVXUYCEoeH0Ne63sfAUb8wSChdhZqZWNIKIkXqIYUbEQCy8MjLAMs+7O7mw2wflgIGTn3JKdf84Bh8PhcDhqwyzwCFSAGRqMFuAe+JarTIMx5klerDsajA2lgB3qgGaDvUdKAasxfMVmGagCL8BCiP09wKcn+U/53S9LwKs84OJzoqwBX55kRCFBrCq/vvg3fmkCnjzPvmQM64i/eEtJRKzbELZFxWZdeV7R+N2y+Vq1aZIQ6x0ohJDPqmInFMlLQfpS/Rdl7Fh0AHsa58/AeAj7nGL3JIvS7atq4hwAXVGT7wVONE6Fho8kIJ9DwLUm3inQZ5p8P3CucXYBDBj4OVbsVwL2Z4EzTdxLYDBs0GF5OL816pExSD4TIJ9+dAOHmviiFRkNMp6Qmqwa7wOdmPGXfAbRDuxq8ngDJv2MRIf4oTHaBloxJ0g+g2iVsdV8Pvy62bJm86a8bEwJI59haJI5qHmVki5A7T6rPvJptQCbr9C65lIi6VfI5iE2lU8rh9iWjEaVTysyauMiiyOfWRsXWdxWIqp8DtlsJaI2c1HlM5dEMxemnc5bkM98ku100EBTsiCfpaQHmr9GygfD4V3HQy1GSi+LMqgY6ucMhnc/5qWve+k7NeLIZ10Qt/tMnYqF7jNVbpTLLkr3mSrTwJUsZCrdVBwOh8PxX/gB5yxtbnqSeOoAAAAASUVORK5CYII=" /> -->

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nO2VMQ6CQBBFX7gQHgXLSYwVt6DwDp6CTgpp9BgWXsBCvQDEAgnJmEw2YLLAasNPfvP/7PzNLjvAAk9EwApIAPFktybWHoOIRzQWh12PQYzZuThcfwuQmTiIvuISqIHCaIVq5dSAHHgrK6PXRs/HBuyBxjQ6Ge9s9EZrvQIyZ5dXYGv8DXAx/gvY+QQ8zeIbkPYcQ6rep+7uE/AIHZCFPiIJfcnyi89UlEdtfnAeWqXe5Jcsc46KOYZd8tdxHWlBsB/OAly02YeaEQbxlucAAAAASUVORK5CYII=" />
      </button>

      <!-- clear marks -->
      <button @click="editor.chain().focus().unsetAllMarks().run()">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABGklEQVR4nO2UQWoCQRBFHwp6HF3pRkNWIUt1N0M06zlImFwhOUCIS28RB0EEMeIJxDMEEgpqoGmmm+mxs7PgQ9NU/1ddNdNwi8BoAX1gAiSBkjM99XBGr4FxYkk8nNGk8sTS1AfwHUyBb+Cga19uI0AO/Kry/wAUBmAdG5ABP5aymIClUXl5k89YgBQ4G71/1fXFM+wgQG4ZprqWvZcYgMIYrqkvYHEtINOBVpk/ac4bsAdWBrA2YKmGhaPSDwu8U0htwNnzY707WrcFunUBR1XV17J3ACT/wfWqhjx2K4d5OYd7oH3Ncz0HNob5CXi2cgY2oKWQSSDkVGEumhEhutrzqgJGMQAScvM7y/wR6MQCSMhAh9qWcWn+B3mZpDraxdpsAAAAAElFTkSuQmCC" />
      </button>

      <!-- clear nodes -->
      <button @click="editor.chain().focus().clearNodes().run()">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVR4nO2TMQoCMRBF3zW8gqwXEGu1tB17D2GxaKFgp5V6APEglnqb7WyMBGZhkV2TMW6lHz6BFO8z+RP4RY2BM3DVc/RNeA64Fz/0PlnLGnjVmzbhTp23CXf6XKZOJgZ4aV98lHqAAAdjwM0CF/XOEHCywsUwie9g+A6eNcBFvU/Zok4ALuptA3wRepp+ZIDUdBKEo/sbGyCVSaLg1glE7f9JtGI7ELXfNrOyNuGluh+u6h1YkzDJFDgG/kGBsZMBMAPmwCUA9xOsLAF/4fUEPROkysk9vLQAAAAASUVORK5CYII=" />
      </button>

      <!-- Paragraph -->
      <button @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }">
        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAADeklEQVR4nMWYXWgUVxTHpz6UkgWr9bPiKiL44IsvgoFs1lgVfNJUUeMH9KWoKNUseUjz0qAIPlX8AgXBoFKyfTGWULASSTRaiNWsobtprEjwxWV37v2fO7ul1Lb0yL24YpOZ2dndWXPgwOXOnHt/8z/n3rkzlhXQiGgFgK0A9iulNgP42HrfxsyzpJR7iOhXIuJ3HcC/RHQXwOFisbiw7jBCiNkABqaCuLmGA3BbSnnItu0locMopeYCeBwExsPHAVyybRwZuD926sc7j7qUUisdx5nHzB9WDEREN2uA4ZKnJyb5h9sjxjMTkyU1/wYwSEQbg8K0hgFDHkDvpPk/AEfLAgFIhQVERAYk83TSs/Ycx1nnCSOlbAoThoItiBt+6TpTboDe3l6OxWLc0NDAemfw8/7+/iBA/+Tz+U+9gMb9ghOJhJkoGl3GbXv3c3t7OycS7dzY2Gj6Fx6Kc2TtctPW11KpVFClWqfB6CWpC81PGcuy+PMduzj99DkXCoqLRcd4V9fX5tqayZO86Nhnpl1h2r5xK+a4X1AsFjPKjKZ/Z1uItzBhABHRRbd0fekXFIlEeFfbPs48e/E/dUJS6LKbQt3lgHa27a0X0BU3hc77BTU3N9czZafcgK75BSWTSTNR6/ad9Sjqw25A35UL7OjoMJMtjUZ595593N3dzSdOHOcNG1pqApJSbnED6g0SnEwmOR6Pm5qauhFWA6S3GqXUJ25AVyvMO5e8s7OzFoXS02DeAJ2bIaALXkAnZwIIQLMrkFLqwAwAvWDmD7wUapkBoOOWlxUKhQV+L1cKH+iPQqEw3xMoyPGDQgQC8K0vzBugsy+zuWnBL136agECQLlcbnFZICFE462hx/zzo/G3wQ9+yfCtoVHXgcfGxgxMU1OTgdAwkXUrTFv3a9f3TI1TSh20gpiu+FzezoyM/qafwvhIaoLztnAF0kfUKo6xw/qL2ApqSqnd1a42Ku9ZKWU0MExJpWw2d680SC5nhwID4JU+lVqV2vUbQ6e/73/wE3TlEfHA8BNTRzXC/EVE2yuG6ekZ/Oh639CFnr7BOUqpTUT0p66f4YdpFkJWC0MA1lthGBG1ALBrUGZECLHaCtOEEEsB9FWhypGKVlOlBmCN/lwBID0g9A+sYQBf6X9LdQOZanoVOo6zCsA2AF8Q0Q69oWaz2UgYE7wGgV47AkOnIdMAAAAASUVORK5CYII=" /> -->

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVR4nO2VQQrCMBBF302MF4inqCeoSE5mc7y2J6g7QYgUXEhpktE4UEoe/O1/TEgyUCnAAB4YgScQPuJWcgWstPwM3BelOcGcVlJ+zJSH0gl8pjxEBGJGbcFDWzBoCzptgfnxFn1FA0yagpkDcAN64Uv+K64K9ntEp/evWbwPYlwSu0C8D1JY7Qm2xwsGLHuUZTIiNQAAAABJRU5ErkJggg==" />
      </button>

      <!-- Heading 1 -->
      <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiUlEQVR4nO3UPQrCQBiE4afyEp5BLb2GoCF4H82FtTDVirDCFpvEv8Ui+8JU8zEDXzFUZkOHK84f+gtsccA6d9Aj4DYQ0I/4S+xwjGpzASHRO/4mCU71s4KmdMEK+/j/IgUpLxdMaYgZFeQItSCUflH/xRY9ace26LGSF5xypmlfXNFmaE0r/+MORXF2aRvMTiAAAAAASUVORK5CYII=" />
      </button>

      <!-- Heading 2 -->
      <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7ElEQVR4nO2UzQsBQRiHH0QUV4WTHLYkytdBcVI+8nXy8f/gH+bAaTU1NL3NELO58Kv3sPNuz7M77+7APz+TI3AGDm/2E0AADIEFMAVaQFoCrkAIXByCq6Uf1+CdpVZAxgSERtkSWvqBgK7FdddX0DRgDb3WMNYWvoIU0AZqertUioZg4yuwpW4IZi7Aq3IlK+ag3iwyQRIYG/Cl/oQjEcSAgdj7vLzJZwYd8XmW3wU861cFXA2ZqAQlAe+54J8KhkKgBjvXNQEKvmdR33EO3Us9wCPqlDwBe4fgYOnngBGwtcDV/1B5tmX/fC83g15/6yxvf5IAAAAASUVORK5CYII=" />
      </button>

      <!-- Heading 3 -->
      <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/klEQVR4nO2UwUrDQBCGvwgVpaJQ8aT0WIqE9NBWUNAKbaGHFlEPJu/T9IXbQ3OKLCwyDLuoTLxIf5hLZvm/3ZnMwEH/RSfABXAcO7ABdkD5y/wVsAAKHznwDJxpgwqogX0EUAXyHeBDmMt4AVrSoBYRUh3ID4ThCpgqSN8KaAMT4E7c9kEA7q2AkOSrRk0DToGlANzEDL4LrUvfg1yVJ2kKcKua+wZ09SELoAWkwKN6RbREliZnAjD/C8C1ALxbAakviZuDI/9tqIbPBHgVZu73nKlmj627KIvsocLD3Vx8yW3JLbCOAMpIvucXm9ymT6FtalHib3suenEQP9Yny9l/miyPNHYAAAAASUVORK5CYII=" />
      </button>

      <!-- Bullet list -->
      <button @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }">
        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtUlEQVR4nN2YO2hTcRTG41uTVNNFWictOjipOBTsI2l3Bwd3sZ0EFarQ4uDk6GJ1F8ygVrFgBSsOrUWR4JOkPkBt0hQaatrvuzFWoaJHTkzaJL1t0+TeXPXABxfu68d5fPf/vy7X/x4issYwjFqVHjsBsAnAYZJXSL4G8J2kqAD8IDkC4Fw6nd5uK4hhGLtJXgLAHMAKMgCctAOkgWQQwM8SQYp12RKQqakpL4CLAObKBJkXgNMVweBPj8QrBckpFp+cvT/0LLBqkHg8viXbJ7+sglGFXr2XByMvB1cF093d3drY2PjV7XZLIBCQSCRiGdC7D+MSfjsWXk2JmpuamubctVulrqNZ3L4aaWtrW0h5LCYDAwNlS+8n+U1ENq4IMzMzc4hk2uPxSH1ni+yLXpD6jhbxer3zQPpQtaBypffrcx6HIp3B/kex4J3hG6YwJPeT/KIXa5ncvhqpP25bhiSZRM/1/qGdV/uG6hbBqNUD+JR7aTgczkBoptrb2y3vIRXJu0uWiuQ1KyeJK0yZSt1bRNaZNXGr1aPNZTQ+MZmRHgPwmwE9rBYMF6u3uHcazLKjPeT3+8UOH8oXgGQ0Gt2c3ztdZhdmYGpt9aF8HcsvV58ZUDV8iAt6IyLrc0AvzICq4UMsLN2JHNBHMyA7fYhL9BKAbdpDYQcnTIqgejRDt5wG4YKGFej8XwAiWY2qDx00O1ktH2Kh7uW8aNRhH5ICPzIM46jDPiQAnovIhgyQ7jABDDroQ6lUKrWn4JumO0sAUQd8KEHygOmaSClJTlRxqp6Q3OVaLpLJ5A6ST20GSQE4JSJrXaWEfuhInlU7txIEwGf98UDS5yonEomEJws2VgHILICbJI8UrHsqjenp6b0kzwC4rSuE4r8e2UXeJIBQFqBLt1SWQrhKDF2ol7Tp+xfjN/q9HDtbwD/eAAAAAElFTkSuQmCC"> -->

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAU0lEQVR4nGNgGAUkAm8GBoYnDAwMjxkYGDxJ1UwMABn8H4ofIYm7MjAwRBKJXcixwIVaFnhCLQEZ7kFxeIwCcsBoMo0cTaaDH3iPlqYMo6XpoAMAq9w8teJzBpwAAAAASUVORK5CYII=" />
      </button>

      <!-- Ordered List -->
      <button @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }">
        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAADOUlEQVR4nMWYTWgTURDHV6tW0EYRJAGtPckiilKKDSJoQFRo8KaCVfDkvXjJMdLivRUVRFChH1i1TTHtQVOxaSPatLBoYoheUsTYrs2beUkQ/KIjL+aQJm9rPnbjwBwC+8Jv//Ofee+topQRRLSRMXYEADoR8SwAHCKi9Uq9Q9d1ByLeRMQ0IlJhAsAyANxFxBNE1GA5DOf8FCJmikFkCQBLiHibc36SiDaZDpMvy49yYCT5DQCeI2I3Y+xCOp12ptPpvckk7AGAbRXDMMb2iz+tEoaMciYcpfm3H4WaOiLe0D582jXgCw71j7zc/S91psyGQURa0pdp4sUc6V+Xc79D4SgfHg898nrXaA5EdFkBg5JMpRgh8tCa6gDA48JFfr+fRNerqmoZGAAcl8IsLi5uKfaOpmnkdDpzUGaDhLV4zlOIOCQF4pyfli30eDwlQAsLCzn1qk2xXnjqaWCWPn9ZShr5p7tcIH++lNWmWP+3XLmSrSDidpl/RuupEK4yeGqfTKGoDEjTNPL5fJZ2HGPsgEwhtLrV0bjTDpbs5vla/hcgXdcdxR22Q/agP2/epqYm6u3ttUqd70S0bhVQJpPZaeSfrq4uamtrI5vNZhVQvMQ/2WzWLns4EAhQR0cH2e12amlpsaTLAOC+bChKS9bc3JyDcbvdNDk5afocyueVEiAi2iAztaIo5HK5yOv1UiQSsUQhcVYqAcrPoWwxkKqqRm9lln/mpTB5oFi92hwAKRpPUCj8frCkwwqAxuoFFI0naOzZm5XBsenY4EjwohFQT73mUDSeoCcTr1j/aPCdIZDs+KFZNIcA4PdEYO7qgG+q07Bkuq5vlR3uW1tbqbGxkRwOh2ldFovF7inlBAA8LAfIX+McUlX1TFlA4hZaCBOJRHIzqL29fVXJalHI4/FcUxSl9EC2BtTrYiVsNhv19fWZ4Z9bSqXBOT8sTGdBuwervmbLRgDW1lWzYr9Uqg3xqQUAhk0CGhdXrKphCqAaAOBODar8RMTrYuNWzAzO+XlETFYINC0+WihWRSKR2AwAlxBxBgB+GSiSQsQHAHDMMhBZCD8wxo5yzs8BwGUAcIszjeEWUGH8AX5tVmif+vN4AAAAAElFTkSuQmCC" /> -->

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAs0lEQVR4nO3UMYoCQRBG4U/c1NDMMyh4A8HETFARYSNZBUND72DiGQQDQ1MxEbyEZhst7CF2GVAwEGcGrGh8UElT9KOLv4s3OVnijJIgJvhD+e6sgSFGGSrpqz8TlB8IBhkvv1U/r6D+yhckLNIais0a3+hFCT4xwyYqplVc0I6IaQknrFCJiOkHtthjmnWmxWOOI1pRgs5VkvyHkJjW8INx1DZtootD1Dbd4RdfabNUGP4BNfQ67AQWNK0AAAAASUVORK5CYII=" />
      </button>

      <!-- blockquote -->
      <button @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }">
        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAADfElEQVR4nO2YS2gTURSGp061liaCWJTaqgsXLVR8IKJFEZRSN4oiaeqzVVB0IdiitBuxosWVKxe6cFl8okUN4gNEU60iFl+xDxWbUtDQTvKf2xYfqHjkTicyTSfJTJKqCy/8kMz8c+83556be24U5X/LUAuFQnlCiCUAqgEcIqKTAC4AuEREPgCX5XciOg3gMIDtRLSQmdVMMSiappUQ0REiegzgOxFxCho2gKv7+/tdKYEAWAHgbooAcQUgQkRHu7o0d3NL6zYpZs6KC9LX15cL4AyAn5mGIZNedrwPn7/+oKe5xf/q7BX/VkuYYDA4mYhaxxOEDL3uDvK1O09+XvQ9+GAJJMNmJCf/KXV0B/l1d4+ciV1jgIho45+EodF59VUIsTg2iZ/9LSAagXr6O7kBzE5k7u3tZU+lh3NdeSxnVyrP7WKv16vfS9cflRCi3NZ0eSo9nDVRZWXtAs6rKePpe1dy/valrE7KZm9VVdp+k65FgXYlAsqVb7p+ISu36nje+2O8INikK79mGbumuNP2m/SZmXMk0IZEQIoM+7Zl+gDRzqVm7F+t30vXb1YkEilTwuFw0T8EtCk6bS+cTpl7+VxWs9W0/THaHQU6GM9U6fWOJOn6Rezat4oLGio4f0cZZ6kTLN/YqT8mQpt1IE3TZgL4EW/Ze6u8Y5ZxaWmp5QBO/WNyyPTjeDtJONmshoaGpAM48cvyRtM0t3n72Pk3gYjIP2r7EEJMBfDN7gC1tbWck5PDmfILIfZYbbJ+uwOUl5dzSUkJZ8gfsqwmjVo5aed+v59VVeX6+nrOhF+Wt5ZFmhCiwk7nRUVFXFhYmHCzdOB/GLeMHRgYKIh9IBAIcGNjI9fV1elhl28qO29ra7MEcOgPAZhjCWPKo8/mh3w+n746ZEIWFxfrYU8UGQf+T/JYlRDGAPpoN1HJpM63vfyovdOuf0gIsSYpjAHUmQpQoKuH7z9+ZcfbB2C+LRinS59MCocj3D+gJfPdkHlqG8YAOu5kmgJdPTqMGUxek/dMyxpxl3ayFolEZhnH36RAMmfkNJkjIz/La0Y+yX6ODw4OTlPSaQDWAfiS6pQBCMr/BIaGhvLTAomJ1DwALXb3t+eBd6Gb99rfENEqZp6gjFcbHh6eAWALETUR0Tl5wjVOuaeI6ICsyWU91Xy11dPc4j8xbiD/mzLSfgHsGxLUokJ4jgAAAABJRU5ErkJggg==" /> -->

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABE0lEQVR4nN2VvY3CQBCFP6AFIgQuAIKDDJwRIkPCj3RTA6ICKqApariDgAZo4U5kPq00J1lrG49/EnjSk6V9z8/yzswuvDvaQACEQATslJGuBeqphAGwAqSAK/Wa0QImhmDxONF3C1ElXJRjy7ZITfbzwtvGPRdDTTILH3jGA3AFHvo8GDXRrBRCz3QB4gSvRs1xlvWBpWf68UJioyY6JynsPNO3F/Br1ESzUth6pj3wlQg5GzXRrBQWOV0RK48ltMhS5GTIraSWWeReTsgdOJXUMs+mDvDZwKAt8wat20C4PDsqRg2Ef/AE85rh46LjelNjz/sYMAXW+idDrUlHu8u1nZsTN0D/V6Zbc91S+cp8DfwBFsOSGmsUn8IAAAAASUVORK5CYII=" />
      </button>

      <!-- <button @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </button>
      <button @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </button> -->

      <!-- undo -->
      <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEsUlEQVR4nO2Y+2tbdRTA09qHbdOCdCBK1f7QhxOZo+0UwV+0D6HQoU1r68A+dCIsTZXpzNRhtch+6AsUfOwfMFacZcomWnRMq5tmpOnSJK3tCKnWNLnJOd8kOMWJR77f5Yab23vTNE1/24FDCPd7D5+c9zcGw03JkQQCgTLG2AEA6AOAE4j4HgB8AgCfIuKXAPAZ/46IHwLAmwDwDCLuJ6JbcsVgkCTpXkR8CxEvAsB1RKQsNJ4A7gsGg8ZtQ5w6dbkQAB4BgG9lo4FgKBuQTQoAEUQc5d7OCMbpDJSd/uonaXnV/59sxOFaoTPf/EwAOwdSqB8RH0sL4/P5bkXE733+dfrux4Xky5ccXgpspHrIbrfTyMgINTc3U1VVFZWUlFBpaSnV1dVRS0sLjY+Pk9vt3spb/wLAEU0YIspLJGdaI3Nzc9Ta2kr5+flC9+69j3p6e8lisdDQkJl6ep6i+vp64iYLCgqov7+fvF5vOigeiec2ASFip/rwzMwMzc/Pyy+S1WqlwsJCqqzcQy8ePUZX3B6Kx6Oa6nQ6yGIZouLiYjIajWSz2dJB/c0Ya0wBAgCH+iD/lVarlYLBIJlMJvH9SVM32Z1uYgx1YZTqdruoqalJeHNsbCwdlJ1HSYa5W+uQDNTX10d5eXn06msn6Fff7xSNsoxgZJWkIB082CGg0nmKMdaiGy4ZqL29XXyah18iz6qfAGFbMLKGQhvU2NhI5eXltLS0pAd1RgY6rAdUVlZGBx58iFzLPlrfCGUFI+vi4hWRUwMDA3pA14iomAM9oQdkMBho+vQX5L26RrFY9jCy8krk1efxeDShIpHIw4ZwOFylB2Q0ltPRY8fp+Otv0Ojo20n1eNxZAS0szAu7ExMTekC9ctic6ofV1dVJL6n13LmzWXuJ96m2tja9sD0vA72yuRSR3Ct+oZhhmWeiXV0mqq2t1fPQ0wJIkqQ7eStXPgyFw0mgXOSPrMPDFlEsujmkaI5fKx9KuwQ0NGQW5a/RHK9LklSuHB+DqbSwKyEzmTrFENbw0IWU8cEYuw0A/lEe8q6uCSAevlwBcRitpGaMvaA1ZC8oD/l+Cwgg/3ogJzB86PIqnZqaUgMFNLfJxK6cPBiUJAGUq8ZoNh/RbIx8vdXcixhjbWpXrvrXBdROR4fLtUBFRUU0ODio9s5cctKrJRQK3aEGksJh8qz4czBcG6iiooKWl5dTQgUA92jCKPLomhoqEAzR5Lvvk2vp6rbXDw7T0XFj/Zienlba/ZNfq9LCJID+UAPNzs4Kg/se2E/nf7hIyFjGYWpoaBDv8j1bYTPGGHt8S5gEkEeri9psNtHQeB70P3uYLv1i1wVxOC6LBOZneZhUnlkDgH0ZwWiVPiqUVwdf3Hml8PKtqa2jTlMXmc1m0YG7u7vEnJKXfJ7Aqpw5y/M0Y5gE0Ek9IEzo4uKiCAG/8tTU1IgrEJ9P8iSfnJxMKW24IdqlvZVEIpG7EtfftFAZKrdzMhqNVhp2IgDQAQB/ZQsCAD7+n0AsFtuzIxCVp+4HgM/V8y0NxBIAfISIjxJRvmG3JB6P3w4AhxDxHUT8mN9wE7fcDxDxZb6T831q1wBuiiFV/gdzz0nhQsGe6gAAAABJRU5ErkJggg==" /> -->

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO3TL0oFURiG8R8I3iAGzSbF4J8VaBdE0WI5UbC7A6tY3IAb0GK64XLdg81i07sCsSiIysCE4cNw1G/A4ANvG54HzpzDP79gBbt9yku7XuUlW74W5OWLHWOIW5xjvVa+WCEvnV3iA2+4wkx2oOCmjTS7w3zGEZXOjvDciYx+8h8iU5jFMvYx7gSabalgtfIWDXASAte+cV13Kr7bDIGJZOZC4CU7sBACT9mBwxBoHmAa07gPgdPMwFmQN696KUt+gPcQuJDIJMgf2hvVS+AVG5LZbiOP2MuW/x0+AT/JVCu7B2KiAAAAAElFTkSuQmCC" />
      </button>

      <!-- redo -->
      <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEuElEQVR4nL2YX0xbZRTALy0BgeKDISYaNJjy58EJDB8kmhgTYDjFuD/iRgi0jG0aXNzTIGEzjZOYAPKiL+qTiwsQTWQuwkMb5E+2OjYyhlIgCGGghNn2nvPdNjHLNDvmfNLl2t5bWyg7yXm47ffnd8+/73xXUXZBVFV9ChEPCCFOIuJBflYetgQCgScR8Qwi3kJEilYAuMmQRJS2axBCiMcQ8RgAuAHgbyMQA7DB1dXVR3a0sctFlogVhBD7AOADRJwEgHuJQBjoREJQvPHFoYn+ianZlxHxY564tLJ++7Jn6h4A/rnNzc0s9XlC1hi9cuuz4dEbD8zvnrxJy6u/pQxEB3RfVdWX4sIAQCkA3A2qEHexubk56unpoaqqKioqKqLs7GzKysqi/Px8+ZvL5aLp6elEoNxxgRDxUrwF5ufnqbm5maxWKymKQoVFxXTo8FvU1tZGp0+/T42NjbRnz7OUlpZGFouFamtryev1xoXSNK3YEMbv9z8BAH+xe9hN0RP7+/vJZrNRZmYmtRw/Sd6p6xQOa4a6vLxE586dpby8PMrIyKDOzk62hlxnZmaGhoaG9FZymbmrCQDph9EbMTHT3d0t37isvILGrlwjIdAURq/r67epoeGotGZ9fT35/X7q6OiQz7r1vWbu4qwihoq2jMVioZra/fTL4gppmkgIRq9dXR9JN7a0tMQAcenY2NjINrLQoFHM2Gw2KivfSzO+JQKEpGEi2t5+RoLU1dVFW4iEEM8bAX0TDdTU1CRjxjPupY07/m3DsGoaUmVlpXzBaCAAaP5fIE5tq9VKztYTtLCyTqHQ9mEiOjY2KmEMgM4aAX0RHciKotCIZ5zWNjaT3nx+3kfnz38Yo7m5uTFAiPipUVC36wdVV1fLOuP7dY38wWDSQCMjww+sEa0FBQXRQF8bAR3WD7Lb7fT6G29KIEwwzRNVIUS0y741ctnT+kE5OTmyADJQKuLnv0AxFfuyYS0CgOXIIM4GZ+uJhwIEAN+ZAX2pd9lrdbvjMoMz7aIhkBCiWh/U9sKibQd1MkCmvRERWRBxnQf19vbKjBh2j20r7c2Ujx4DoNg6pMu2Lh7k8/koPT2dHMdSVxhNApqBGk2BQqFQHiKGeaDD4ZDtg3v86o6PDtZQKNY6W0DPmQJtBfcnPHBhYUFmW2nZzg/Xf61jCKQRkTUuUDgcfhwRBU8YGBiQ7Uf1vle31X4EAn/QhQtfGbpqSy/FhdHF0vHIJO6fGaq0rJx+nPQSisSg5uZ+poqKCjnX4/GYucs8fvTCN0wAcEcmDg4OyoORY6q5pZWu/nTNFGR2doZOnXpPti48h+eawAQ2NzdzlEQlGAzmI+LvkQUWFxfJ6XTK7GNmu72QDhw8JJt8Bjhy5G0qKSmR/8kMdThkk2fW4POFM2EYnev2RrJO30n29fVRTU0NFRcXy3OPr0J8JeKCyjWM+ykzkC1dS8o6elFVdT9i6m6ufLtBxFeUnYimaS8AwJ0UwNwXQryjpEIQ8Rm+tuwA5i5/LVFSKUSUhojOZK0FANc5HpXdkkAgkKuq6rtbn2U4JoxAOO6+5y5iVz9URUswGHxUVdUXVVU9yp/xVFVt4JgjooxkF/sHOt1SSHg7riQAAAAASUVORK5CYII=" /> -->

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA50lEQVR4nO3TMUoDQRSA4Q9EbLRILK2EWGjiBbS1ESUprFLZ2HuDlAErL+ABBBsLG8khtBJsozdIJWgigRWWR0h2ZVYI+MMr3/8Pwwz//AGn2K0y0M2mVXWg+5vIPq7xhAdcBuGsaRYRr+MOn5jgtoA4P9vz5Jt4ycQTDErKFwYGOfkIFyXlc6/oKCefziM62MEGVmbslLr/+xDoYW3Bzo98TwHeQ+CgwM5JmY/2EQI1iRmFwFbqwHMInKcOXIXAK1ZTBhr4CpG+xNyEwBhnKQN1DEPkTWIOw5MdqoB2dvKp/LiKwHLwDUQyVDy1Gh+QAAAAAElFTkSuQmCC" />
      </button>
    </div>
    <editor-content :editor="editor" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'

import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const editor = useEditor({
  content: value.value,
  onUpdate: () => {
    // HTML
    emit('update:modelValue', editor.value.getHTML())
    // JSON
    // emit('update:modelValue', this.editor.getJSON())
  },
  extensions: [
    StarterKit,
    Underline
  ],
  editorProps: {
    attributes: {
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none min-h-[400px]',
    },
  },
})
onBeforeUnmount(() => {
  editor.value.destroy()
})
</script>
<style scoped lang="scss">
.is-active {
  background-color: #15803d;
  color: white;
}
</style>