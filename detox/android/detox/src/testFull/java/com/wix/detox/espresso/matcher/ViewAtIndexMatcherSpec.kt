package com.wix.detox.espresso.matcher

import android.view.View
import com.nhaarman.mockitokotlin2.*
import org.hamcrest.Description
import org.hamcrest.Matcher
import org.mockito.Matchers
import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.describe

object ViewAtIndexMatcherSpec: Spek({
    describe("atIndex view-matcher") {

        lateinit var innerMatcher: Matcher<View>
        lateinit var description: Description
        beforeEachTest {
            innerMatcher = mock()
            whenever(innerMatcher.toString()).thenReturn("(innerMatcher description)")

            description = mock()
        }

        describe("describeTo") {
            it("should append a valid description for index 0") {
                val uut = ViewAtIndexMatcher(0, innerMatcher)
                uut.describeTo(description)
                verify(description).appendText("View at index #0, of those matching MATCHER(innerMatcher description)")
            }
            
            it("should append a valid description for index≥0") {
                val uut = ViewAtIndexMatcher(7, innerMatcher)
                uut.describeTo(description)
                com.nhaarman.mockitokotlin2.
                verify(description).appendText(Matchers.contains("View at index #7"))
            }
        }
    }
});
