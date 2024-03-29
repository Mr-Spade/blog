---
abstract: 本文是对一场CF比赛的解析，象征着CF用户Mr_Spade的回归，用到的好方法有线性基、贪心等。
date: 2020-10-16
---

# Codeforces Global Round 11 A-F题解

很久以前，我在退役之后说过要在Codeforces上与你们再见。我回来了。

先写A-E的题解，F和G之后补。~~先写一部分可以防止咕咕咕。~~

F已经补上，G的题解非常妙，我将单独开一篇来介绍。

## A. Avoiding Zero

重排一列数使得前缀和始终不为$0$，可能无解。

题解：和为$0$则显然无解，否则考虑分为正数和负数两部分，将和的绝对值大的那一部分放在前面，就不会出现前缀和为$0$了。

## B. Chess Cheater

你有自己$n$场比赛的结果（赢或输），输的场不扣分，赢的场得一分，如果上一场也赢再得一分。你可以修改$k$场比赛的结果，使得自己总分最大。

题解：显然只需要把输改为赢。那么修改完之后赢的场次就是$\min\{cnt+k,n\}$，其中$cnt$为本来就赢得的场次。

然后只需要最小化连赢的场的段数。可以通过把两段连赢之间的输改成赢来减少一段。那么只要按照连赢段之间的距离升序排序尽量消除就可以了。

## C. The Hard Work of Paparazzi

有一个二维平面，从一点$(x_1,y_1)$走到另一点$(x_2,y_2)$所花的时间为$|x_1-x_2|+|y_1-y_2|$。有$n$个事件，第$i$个在时刻$t_i$在点$(x_i,y_i)$发生。你时刻$0$在$(1,1)$，问最多参与多少事件。事件发生时刻严格递增。$|x_i|,|y_i|\leq 500,n\leq 10^5$。

题解：比赛时居然没想到...老了老了。考虑朴素$dp$，$f_i$表示参与$i$号事件时之前最多参与了几个事件。普通的一次转移是$O(n)$的，但考虑如果时间差大于$2*|x|$就肯定能到了，因此前面最多只有$O(|x|)$个事件是需要逐一判断的。复杂度优化为$O(n|x|)$。

## D. Unshuffling a Deck

你有一个长度为$n$的排列$p$，每次可以将其分割为若干段，段内顺序不变，所有段之间顺序反转。给出不多于$n$次这样的操作将原排列排序。

题解：记录$k$是排列中的第$a_k$个。如果对$k=1,2,\dots,n-1$，都有$a_k<a_{k+1}$就排完了。否则找到某一个$a_k>a_{k+1}$的$k$。

设$k+1$之后连续递增的一段为$[a_{k+1},pos]$（即这个区间内$p_i=i-a_{k+1}+k+1$），将排列分割为$[1,a_{k+1}-1],[a_{k+1},pos],[pos+1,a_k],[a_k+1,n]$四段，用题中操作，操作完毕后$a_k+1=a_{k+1}$，即$k$与$k+1$连在了一起，同时不会破坏任何已经连在一起的对。不断重复上述操作即可。

##E. Xum

黑板上初始有一个奇数，每次可以选黑板上两个数（可重复），再写出它们的和或异或和，重复若干步写出$1$。限制比较宽松。

题解：我的做法是非标准的做法。考虑用线性基判定是否可以通过异或得到$1$，先加和几次自身扩充一下线性基，之后每次随机从线性基中得到两个数取和加入，不久就会出解。对于$2^k+1$的情况会比较苛刻，要先得到较大的倍数加入线性基中。

## F. Boring Card Game

桌上有$1,2,\dots,6n$标号的$6n$张连续牌，Alice和Bob玩游戏轮流取$3$张，Alice先取，每次取出位置连续的三张牌并将上下两堆牌合并。给出Alice最终拿到的所有牌的标号，复原一种可能的游戏过程，保证有解。$n\leq 200$

题解：

先考虑问题的弱化版：取消轮流取的限制，允许某人反复取三张牌，先判断这个条件下是否有解。

那么考虑一个贪心：从左到右扫描牌，逐一加入栈中，如果加入后栈顶出现三张属于同一个人的牌，就视为进行了一次取走操作，将这三张牌弹出。

如果贪心算法最终能将栈清空，显然就得到了一组合法解。现在来进一步证明如果弱化版问题有合法解那么栈一定被清空。

对取牌轮数$n$用数学归纳法。
$n=0$时显然成立。
假设$n=k$时成立。$n=k+1$时，对某种有解的情况，我们随意考虑它的某一个解，这个解的第一步取走的必定是标号连续的牌，设为$k,k+1,k+2$。如果我们先打破贪心规则取走这三张牌，由数学归纳法，剩下的牌可以通过贪心构造一个解。
进一步转化，可以发现如果将之后的若干不依赖于$k,k+1,k+2$三张牌被取走的前提就能取走的牌先于$k,k+1,k+2$被取走，也是合法的。因此我们换一种打破规则的方式，改成在$k,k+1,k+2$中的一些牌置于栈顶并可以取走时，如果并非$k,k+1,k+2$这一组合就不取走，直到$k,k+1,k+2$都出现在栈顶才取走它们（此时栈顶可能有$4-5$张属于同一人的牌），也能在之后合乎贪心的过程给出一个解。
最后，由于$k,k+1,k+2$是连续的，假设我们保留了本来可以取走的$a,b,k$不取走，$k+1,k+2$必定马上到来并将$k$带走，此时栈顶留下$a,b$，但是如果我们合乎规则操作，直接取走$a,b,k$，栈顶就剩下$k+1,k+2$，由于这些牌的归属者相同，对于之后的过程来说，除了标号$k+1,k+2$和$a,b$没有本质区别，因此原来能得出解此刻仍然可以得出解。$a,k,k+1$的情况也是类似的。而此时是完全符合贪心规则的。因此也就证明完毕了。

因此原问题有解的必要条件是栈能够清空，也就是得出一种弱化版的方案，现在再来分析一下该方案中每一组牌之间的依赖关系。可以得知，如果我们让三张牌对应到包含这三张牌编号的最小区间，那么任何两个区间之间只有无交和包含两种关系，因此可以建立一个森林，树中祖先的区间包含所有后代的区间。对于这三张牌，显然只有其子树对应的三张牌组取完才可以取。不难发现，对一组三张牌，尽管其后代中可能存在归属者相同的牌组，但由贪心的性质其儿子对应的归属者都是与自己的不同的。

重新考虑轮流取的限制，我们对森林的操作就变成了：只有所有叶子都已经被取走的节点可以被取走，且必须$Alice$的牌的点和$Bob$的牌的点轮流取走。考虑是否存在这样一个取走的序列。

首先，最后一组取走的牌一定是森林中某棵树的根。因此，如果所有根都是$Alice$的牌，就一定无解。那么下面只要说明森林里有一棵树的根属于$Bob$，就一定能找到一组解。

要取$Alice$的节点时，假设没有$Alice$的节点作叶子，那么所有$Alice$和某个儿子$Bob$节点配对。但是$Bob$节点至少有一个根，不满足条件，因此有$Alice$叶子节点，随意取一个即可。

而要取$Bob$的节点时，此时$Bob$的节点多一个。分两种情况：$Bob$的根只有一个和有多个。
如果有多个，假设没有$Bob$叶子，就令每个$Bob$点和某儿子$Alice$点配对，而$Alice$点少一个，必不可行。又由于$Bob$根多于一个，取走一个并不影响“存在至少一个$Bob$根”这一性质，因此随便取。
如果只有一个，那么再分类：
如果这个点有儿子，本来就不可取，直接利用结论随便取走一个叶子即可。
如果这个点没有儿子，且除了它以外没有别的树，它就是最后一个点，显然可以取走。如果没有儿子且还有别的树，一定是以$Alice$为根，不考虑这个点后的讨论和$Alice$相似，一定可以找到另一个$Bob$叶子。